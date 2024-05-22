package routes

import (
	"cloud.google.com/go/firestore"
	"github.com/gin-gonic/gin"
	"github.com/zVitorSantos/gofirebasetest.git/controllers"
)

func RegisterUserRoutes(r *gin.RouterGroup, db *firestore.Client) {
	userController := controllers.NewUserController(db)

	r.POST("/user", userController.CreateUser)
	r.GET("/user", userController.GetUsers)
	r.GET("/user/:id", userController.GetUserByID)
	r.PUT("/user/:id", userController.UpdateUser)
	r.DELETE("/user/:id", userController.DeleteUser)
}
