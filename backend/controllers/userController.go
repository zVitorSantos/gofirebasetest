package controllers

import (
	"net/http"
	"strconv"

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
	user, err := uc.userService.CreateUser(&request)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	ctx.JSON(http.StatusOK, user)
}

func (uc *UserController) GetUserByID(ctx *gin.Context) {
	userIDParam := ctx.Param("id")
	userID, err := strconv.Atoi(userIDParam)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid user ID"})
		return
	}
	user, err := uc.userService.GetUserByID(userID)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Error fetching user"})
		return
	}
	ctx.JSON(http.StatusOK, user)
}

func (uc *UserController) GetUserByUID(ctx *gin.Context) {
	uid := ctx.Param("uid")
	user, err := uc.userService.GetUserByUID(uid)
	if err != nil {
		ctx.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
		return
	}
	ctx.JSON(http.StatusOK, user)
}

func (uc *UserController) GetUsers(ctx *gin.Context) {
    users, err := uc.userService.GetUsers()
    if err != nil {
        ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Error fetching users"})
        return
    }
    ctx.JSON(http.StatusOK, users)
}

func (uc *UserController) GetUserPermissions(ctx *gin.Context) {
	uid := ctx.Param("uid")
	role, err := uc.userService.GetUserPermissions(uid)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Error fetching user permissions"})
		return
	}
	ctx.JSON(http.StatusOK, gin.H{"permissions": role})
}

func (uc *UserController) UpdateUser(ctx *gin.Context) {
	userIDParam := ctx.Param("id")
	userID, err := strconv.Atoi(userIDParam)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid user ID"})
		return
	}
	var request models.UpdateUserRequest
	if err := ctx.ShouldBindJSON(&request); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	if err := uc.userService.UpdateUser(userID, &request); err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	ctx.JSON(http.StatusOK, gin.H{"message": "User updated successfully"})
}

func (uc *UserController) DeleteUser(ctx *gin.Context) {
	userIDParam := ctx.Param("id")
	userID, err := strconv.Atoi(userIDParam)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid user ID"})
		return
	}
	if err := uc.userService.DeleteUser(userID); err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	ctx.JSON(http.StatusOK, gin.H{"message": "User deleted successfully"})
}
