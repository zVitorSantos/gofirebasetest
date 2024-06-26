package main

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/zVitorSantos/gofirebasetest.git/middleware"
	"github.com/zVitorSantos/gofirebasetest.git/routes"
	"github.com/zVitorSantos/gofirebasetest.git/services"
	"github.com/zVitorSantos/gofirebasetest.git/utils"
)

func main() {
	// Configura o Firestore usando a função InitFirestore
	client := utils.InitFirestore()
	if client == nil {
		panic("Failed to initialize Firestore")
	}
	defer client.Close()

	// Configura o UserService
	userService := services.NewUserService(client)

	// Configura o Gin
	r := gin.Default()

	// Allow CORS
	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"http://localhost:5173"}
	config.AllowMethods = []string{"GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"} 
	config.AllowHeaders = []string{"Origin", "Content-Length", "Content-Type", "Authorization"} 
	r.Use(cors.New(config))

	// Define o grupo de rotas com o prefixo /api/v1
	api := r.Group("/api/v1")
	api.Use(middleware.AuthMiddleware(userService))
	{
		routes.RegisterCatalogRoutes(api, client)
		routes.RegisterUserRoutes(api, client)
	}

	// Inicia o servidor
	r.Run(":8080")
}
