package main

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/zVitorSantos/gofirebasetest.git/routes"
	"github.com/zVitorSantos/gofirebasetest.git/utils"
)

func main() {
	// Configura o Firestore usando a função InitFirestore
	client := utils.InitFirestore()
	defer client.Close()

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
	{
		routes.RegisterCatalogRoutes(api, client)
		routes.RegisterUserRoutes(api, client)
	}

	// Inicia o servidor
	r.Run(":8080")
}