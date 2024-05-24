package services

import (
	"context"
	"errors"

	firebase "firebase.google.com/go"
	"firebase.google.com/go/auth"
	"google.golang.org/api/option"
)

type AuthService struct {
	client *auth.Client
}

func NewAuthService() *AuthService {
	opt := option.WithCredentialsFile("keys.json")
	app, err := firebase.NewApp(context.Background(), nil, opt)
	if err != nil {
		panic("Failed to initialize Firebase App: " + err.Error())
	}

	authClient, err := app.Auth(context.Background())
	if err != nil {
		panic("Failed to create Auth client: " + err.Error())
	}

	return &AuthService{client: authClient}
}

func (s *AuthService) RegisterUser(email string, password string, role string) (*auth.UserRecord, error) {
    params := (&auth.UserToCreate{}).
        Email(email).
        Password(password)

    userRecord, err := s.client.CreateUser(context.Background(), params)
    if err != nil {
        return nil, err
    }

    // Set custom token claims
    claims := map[string]interface{}{"role": role}
    err = s.client.SetCustomUserClaims(context.Background(), userRecord.UID, claims)
    if err != nil {
        return nil, err
    }

    return userRecord, nil
}

func (s *AuthService) GetUserByEmail(email string) (*auth.UserRecord, error) {
	userRecord, err := s.client.GetUserByEmail(context.Background(), email)
	if err != nil {
		if err.Error() == "user not found" {
			return nil, errors.New("user not found")
		}
		return nil, err
	}
	return userRecord, nil
}

func (s *AuthService) VerifyIDToken(idToken string) (*auth.Token, error) {
	token, err := s.client.VerifyIDToken(context.Background(), idToken)
	if err != nil {
		return nil, errors.New("invalid ID token")
	}
	return token, nil
}
