package middleware

import (
	"log"
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/zVitorSantos/gofirebasetest.git/services"
)

func AuthMiddleware(userService *services.UserService) gin.HandlerFunc {
	return func(ctx *gin.Context) {
		token := ctx.GetHeader("Authorization")
		if token == "" {
			log.Println("No Authorization header provided")
			ctx.Next()
			return
		}

		token = strings.TrimSpace(strings.TrimPrefix(token, "Bearer"))

		authService := userService.AuthService()
		userToken, err := authService.VerifyIDToken(token)
		if err != nil {
			log.Println("Invalid token:", err)
			ctx.Next()
			return
		}

		user, err := userService.GetUserByUID(userToken.UID)
		if err != nil {
			log.Println("User not found:", err)
			ctx.Next()
			return
		}

		log.Printf("Authenticated user: %v with permissions: %v", user.UID, user.Permissions)
		ctx.Set("user", user)
		ctx.Next()
	}
}
