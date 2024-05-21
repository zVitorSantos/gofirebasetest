package main

import (
	"github.com/gin-gonic/gin"
	"github.com/zVitorSantos/gofirebasetest.git/routes"
	"github.com/zVitorSantos/gofirebasetest.git/utils"
)

func main() {
	r := gin.Default()
	db := utils.InitFirestore()

	routes.RegisterCatalogRoutes(r, db)

	r.Run()
}
