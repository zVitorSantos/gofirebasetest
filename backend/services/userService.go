package services

import (
	"context"
	"fmt"

	"cloud.google.com/go/firestore"
	"firebase.google.com/go/auth"
	"github.com/zVitorSantos/gofirebasetest.git/models"
	"google.golang.org/api/iterator"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
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

func (s *UserService) CreateUser(request *models.CreateUserRequest) (*models.User, error) {
    // Tenta obter o usuário pelo email
    userRecord, err := s.authService.GetUserByEmail(request.Email)
    if err != nil {
        if err.Error() == "user not found" {
            userRecord, err = s.authService.RegisterUser(request.Email, request.Password, request.Role)
            if err != nil {
                fmt.Printf("Error registering user: %v\n", err)
                return nil, err
            }
        } else {
            fmt.Printf("Error getting user by email: %v\n", err)
            return nil, err
        }
    }

    userID, err := s.generateUserID()
    if err != nil {
        fmt.Printf("Error generating user ID: %v\n", err)
        return nil, err
    }

    role := request.Role
    if role == "" || role == "defaultRole" {
        role = "user"
    }

    user := models.User{
        UID:         userRecord.UID,
        UserID:      userID,
        Name:        request.Name,
        Role:        role,
        Permissions: s.defaultPermissions(role),
    }

    _, err = s.db.Collection("users").Doc(fmt.Sprintf("%d", userID)).Set(context.Background(), user)
    if err != nil {
        fmt.Printf("Error saving user to Firestore: %v\n", err)
        return nil, err
    }

    return &user, nil
}

func (s *UserService) defaultPermissions(role string) []string {
	switch role {
	case "admin":
		return []string{"manage_users", "add_item", "edit_item", "delete_item", "view_all_categories"}
	case "employee":
		return []string{"add_item", "edit_item", "delete_item", "view_all_categories"}
	case "user":
		return []string{"view_type:cat1", "view_type:cat2"}
	default:
		return []string{}
	}
}

func (s *UserService) GetUserByID(userID int) (*models.User, error) {
    ctx := context.Background()
    docID := fmt.Sprintf("%d", userID)
    doc, err := s.db.Collection("users").Doc(docID).Get(ctx)
    if err != nil {
        return nil, err
    }
    var user models.User
    if err := doc.DataTo(&user); err != nil {
        return nil, err
    }
    return &user, nil
}

func (s *UserService) GetUserByUID(uid string) (*models.User, error) {
    ctx := context.Background()
    iter := s.db.Collection("users").Where("uid", "==", uid).Limit(1).Documents(ctx)
    doc, err := iter.Next()
    if err == iterator.Done {
        return nil, fmt.Errorf("user not found")
    }
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

func (s *UserService) GetUserPermissions(uid string) ([]string, error) {
    user, err := s.GetUserByUID(uid)
    if err != nil {
        return nil, err
    }
    return user.Permissions, nil
}

func (s *UserService) UpdateUser(userID int, request *models.UpdateUserRequest) error {
    ctx := context.Background()
    docID := fmt.Sprintf("%d", userID)

    user, err := s.GetUserByID(userID)
    if err != nil {
        return err
    }

    params := (&auth.UserToUpdate{}).
        Email(request.Email).
        Password(request.Password)
    _, err = s.authService.client.UpdateUser(ctx, user.UID, params)
    if err != nil {
        return err
    }

    var updates []firestore.Update
    if request.Name != "" {
        updates = append(updates, firestore.Update{Path: "name", Value: request.Name})
    }
    if request.Role != "" {
        updates = append(updates, firestore.Update{Path: "role", Value: request.Role})
    }
    if request.Permissions != nil {
        updates = append(updates, firestore.Update{Path: "permissions", Value: request.Permissions})
    }

    _, err = s.db.Collection("users").Doc(docID).Update(ctx, updates)
    return err
}

func (s *UserService) UpdateUserPermissions(userID int, permissions []string) error {
    ctx := context.Background()
    docID := fmt.Sprintf("%d", userID)

    _, err := s.db.Collection("users").Doc(docID).Update(ctx, []firestore.Update{
        {Path: "permissions", Value: permissions},
    })
    return err
}

func (s *UserService) DeleteUser(userID int) error {
    ctx := context.Background()
    docID := fmt.Sprintf("%d", userID)

    user, err := s.GetUserByID(userID)
    if err != nil {
        return err
    }

    err = s.authService.client.DeleteUser(ctx, user.UID)
    if err != nil {
        return err
    }

    _, err = s.db.Collection("users").Doc(docID).Delete(ctx)
    return err
}

func (s *UserService) generateUserID() (int, error) {
    ctx := context.Background()

    doc, err := s.db.Collection("metadata").Doc("lastUserID").Get(ctx)
    if err != nil {
        if status.Code(err) == codes.NotFound {
            newUserID := 1
            _, err = s.db.Collection("metadata").Doc("lastUserID").Set(ctx, map[string]interface{}{
                "lastUserID": newUserID,
            })
            if err != nil {
                return 0, err
            }
            return newUserID, nil
        }
        return 0, err
    }

    lastUserID, err := doc.DataAt("lastUserID")
    if err != nil {
        return 0, err
    }

    var newUserID int
    switch v := lastUserID.(type) {
    case int64:
        newUserID = int(v) + 1
    case int:
        newUserID = v + 1
    default:
        return 0, fmt.Errorf("invalid type for lastUserID: %T", lastUserID)
    }

    if newUserID > 999999 {
        return 0, fmt.Errorf("user ID overflow: exceeded maximum 6-digit user ID")
    }

    _, err = s.db.Collection("metadata").Doc("lastUserID").Set(ctx, map[string]interface{}{
        "lastUserID": newUserID,
    })
    if err != nil {
        return 0, err
    }

    return newUserID, nil
}