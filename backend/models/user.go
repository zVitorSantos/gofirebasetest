package models

type CreateUserRequest struct {
	Name     string `json:"name" binding:"required"`
	Email    string `json:"email" binding:"required"`
	Password string `json:"password" binding:"required"`
	Role     string `json:"role" binding:"required"`
}

type UpdateUserRequest struct {
	Name     string `json:"name" binding:"required"`
	Email    string `json:"email" binding:"required"`
	Password string `json:"password" binding:"required"`
	Role     string `json:"role" binding:"required"`
}

type User struct {
	UID     string `json:"uid" firestore:"uid"`
	UserID  int    `json:"userID" firestore:"userID"`
	Name    string `json:"name" firestore:"name"`
	Role    string `json:"role" firestore:"role"`
}