package main

import (
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

	// Define o grupo de rotas com o prefixo /api/v1
	api := r.Group("/api/v1")
	{
		routes.RegisterCatalogRoutes(api, client)
		routes.RegisterUserRoutes(api, client)
	}

	// Inicia o servidor
	r.Run(":8080")
}
