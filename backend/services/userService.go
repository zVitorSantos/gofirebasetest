package services

import (
    "context"

    "cloud.google.com/go/firestore"
    "firebase.google.com/go/auth"
    "github.com/zVitorSantos/gofirebasetest.git/models"
    "google.golang.org/api/iterator"
)

type UserService struct {
    db          *firestore.Client
    authService *AuthService
}

func NewUserService(db *firestore.Client) *UserService {
    return &UserService{
        db:          db,
        authService: NewAuthService(),
    }
}

func (s *UserService) CreateUser(request *models.CreateUserRequest) (*auth.UserRecord, error) {
    // Try to get the user by email
    userRecord, err := s.authService.GetUserByEmail(request.Email)
    if err != nil {
        // If the user does not exist, register a new user
        if err.Error() == "user not found" {
            userRecord, err = s.authService.RegisterUser(request.Email, request.Password, request.Role)
            if err != nil {
                return nil, err
            }
        } else {
            // If there was an error other than ErrUserNotFound, return the error
            return nil, err
        }
    }

    // At this point, userRecord should be the existing user or the newly registered user

    // Generate a unique UserID
    userID, err := s.generateUserID()
    if err != nil {
        return nil, err
    }

    user := models.User{
        UID:     userRecord.UID,
        UserID:  userID,
        Name:    request.Name,
        Role:    request.Role,
    }

    _, err = s.db.Collection("users").Doc(user.UID).Set(context.Background(), user)
    if err != nil {
        return nil, err
    }

    return userRecord, nil
}


func (s *UserService) GetUserByID(uid string) (*models.User, error) {
	ctx := context.Background()
	doc, err := s.db.Collection("users").Doc(uid).Get(ctx)
	if err != nil {
		return nil, err
	}
	var user models.User
	if err := doc.DataTo(&user); err != nil {
		return nil, err
	}
	return &user, nil
}

func (s *UserService) GetUsers() ([]models.User, error) {
	ctx := context.Background()
	iter := s.db.Collection("users").Documents(ctx)
	defer iter.Stop() 

	var users []models.User

	for {
		doc, err := iter.Next()
		if err == iterator.Done {
			break
		}
		if err != nil {
			return nil, err
		}
		var user models.User
		if err := doc.DataTo(&user); err != nil {
			return nil, err
		}
		users = append(users, user)
	}
	return users, nil
}

func (s *UserService) GetUserPermissions(uid string) (string, error) {
	user, err := s.GetUserByID(uid)
	if err != nil {
		return "", err
	}
	return user.Role, nil
}

func (s *UserService) UpdateUser(uid string, request *models.UpdateUserRequest) error {
	ctx := context.Background()

	// Update user in Firebase Auth
	params := (&auth.UserToUpdate{}).
		Email(request.Email).
		Password(request.Password)
	_, err := s.authService.client.UpdateUser(ctx, uid, params)
	if err != nil {
		return err
	}

	// Create a slice of fields to update in Firestore
	var updates []firestore.Update
	if request.Name != "" {
		updates = append(updates, firestore.Update{Path: "name", Value: request.Name})
	}
	if request.Role != "" {
		updates = append(updates, firestore.Update{Path: "role", Value: request.Role})
	}

	// Update user in Firestore
	_, err = s.db.Collection("users").Doc(uid).Update(ctx, updates)
	return err
}

func (s *UserService) DeleteUser(uid string) error {
	ctx := context.Background()

	// Delete user from Firebase Auth
	err := s.authService.client.DeleteUser(ctx, uid)
	if err != nil {
		return err
	}

	// Delete user from Firestore
	_, err = s.db.Collection("users").Doc(uid).Delete(ctx)
	return err
}

func (s *UserService) generateUserID() (int, error) {
	ctx := context.Background()

	// Get the document that stores the last used UserID
	doc, err := s.db.Collection("metadata").Doc("lastUserID").Get(ctx)
	if err != nil {
		return 0, err
	}

	// Get the last used UserID
	lastUserID, err := doc.DataAt("lastUserID")
	if err != nil {
		return 0, err
	}

	// Increment the last used UserID
	newUserID := lastUserID.(int) + 1

	// Update the last used UserID in Firestore
	_, err = s.db.Collection("metadata").Doc("lastUserID").Set(ctx, map[string]interface{}{
		"lastUserID": newUserID,
	})
	if err != nil {
		return 0, err
	}

	return newUserID, nil
}
