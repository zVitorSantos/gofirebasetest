package controllers

import (
    "net/http"

    "cloud.google.com/go/firestore"
    "github.com/gin-gonic/gin"
    "github.com/zVitorSantos/gofirebasetest.git/models"
    "github.com/zVitorSantos/gofirebasetest.git/services"
)

type UserController struct {
    userService *services.UserService
    db          *firestore.Client
}

func NewUserController(db *firestore.Client) *UserController {
    return &UserController{
        userService: services.NewUserService(db),
        db:          db,
    }
}

func (uc *UserController) CreateUser(ctx *gin.Context) {
	var request models.CreateUserRequest

	if err := ctx.ShouldBindJSON(&request); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	userRecord, err := uc.userService.CreateUser(&request)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	ctx.JSON(http.StatusOK, gin.H{"uid": userRecord.UID})
}

func (uc *UserController) GetUsers(ctx *gin.Context) {
	users, err := uc.userService.GetUsers()
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Error fetching users"})
		return
	}

	ctx.JSON(http.StatusOK, users)
}

func (uc *UserController) GetUserByID(ctx *gin.Context) {
	uid := ctx.Param("id")

	user, err := uc.userService.GetUserByID(uid)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Error fetching user"})
		return
	}

	ctx.JSON(http.StatusOK, user)
}

func (uc *UserController) GetUserPermissions(ctx *gin.Context) {
	uid := ctx.Param("uid")

	role, err := uc.userService.GetUserPermissions(uid)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Error fetching user permissions"})
		return
	}

	ctx.JSON(http.StatusOK, gin.H{"role": role})
}

func (uc *UserController) UpdateUser(ctx *gin.Context) {
	uid := ctx.Param("id")
	var request models.UpdateUserRequest

	if err := ctx.ShouldBindJSON(&request); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	err := uc.userService.UpdateUser(uid, &request)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	ctx.JSON(http.StatusOK, gin.H{"message": "User updated successfully"})
}

func (uc *UserController) DeleteUser(ctx *gin.Context) {
	uid := ctx.Param("id")

	err := uc.userService.DeleteUser(uid)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	ctx.JSON(http.StatusOK, gin.H{"message": "User deleted successfully"})
}
