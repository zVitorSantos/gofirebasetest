package routes

import (
	"cloud.google.com/go/firestore"
	"github.com/gin-gonic/gin"
	"github.com/zVitorSantos/gofirebasetest.git/controllers"
)

func RegisterCatalogRoutes(r *gin.Engine, db *firestore.Client) {
	catalogController := controllers.NewCatalogController(db)

	r.POST("/catalog", catalogController.CreateProduct)
	r.GET("/catalog", catalogController.GetProducts)
	// Similar routes for UpdateProduct and DeleteProduct can be registered here
}
