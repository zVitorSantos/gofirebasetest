package models

type CreateUserRequest struct {
	Name        string   `json:"name" binding:"required"`
	Email       string   `json:"email" binding:"required"`
	Password    string   `json:"password" binding:"required"`
	Role        string   `json:"role" binding:"required"`
	Permissions []string `json:"permissions"`
}

type UpdateUserRequest struct {
	Name        string   `json:"name"`
	Email       string   `json:"email"`
	Password    string   `json:"password"`
	Role        string   `json:"role"`
	Permissions []string `json:"permissions"`
}

type User struct {
	UID         string   `json:"uid" firestore:"uid"`
	UserID      int      `json:"userID" firestore:"userID"`
	Name        string   `json:"name" firestore:"name"`
	Role        string   `json:"role" firestore:"role"`
	Permissions []string `json:"permissions" firestore:"permissions"`
}
