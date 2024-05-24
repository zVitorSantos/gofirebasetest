package routes

import (
	"cloud.google.com/go/firestore"
	"github.com/gin-gonic/gin"
	"github.com/zVitorSantos/gofirebasetest.git/controllers"
)

func RegisterCatalogRoutes(r *gin.RouterGroup, db *firestore.Client) {
	catalogController := controllers.NewCatalogController(db)

	r.POST("/catalog", catalogController.CreateProduct)
	r.GET("/catalog", catalogController.GetProducts)
	r.GET("/catalog/:id", catalogController.GetProductByID)
	r.PUT("/catalog/:id", catalogController.UpdateProduct)
	r.DELETE("/catalog/:id", catalogController.DeleteProduct)

	// Rota para configurações de catálogo
	r.GET("/catalog/settings", catalogController.GetCatalogSettings)
}
