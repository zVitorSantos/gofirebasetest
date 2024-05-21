package controllers

import (
	"net/http"

	"cloud.google.com/go/firestore"
	"github.com/gin-gonic/gin"
	"github.com/zVitorSantos/gofirebasetest.git/models"
	"github.com/zVitorSantos/gofirebasetest.git/services"
	"github.com/zVitorSantos/gofirebasetest.git/utils"
)

type CatalogController struct {
	service *services.CatalogService
}

func NewCatalogController(db *firestore.Client) *CatalogController {
	return &CatalogController{
		service: services.NewCatalogService(db),
	}
}

func (cc *CatalogController) CreateProduct(ctx *gin.Context) {
	var request models.CreateProductRequest
	if err := ctx.ShouldBindJSON(&request); err != nil {
		utils.SendError(ctx, http.StatusBadRequest, "Invalid request")
		return
	}

	if err := request.Validate(); err != nil {
		utils.SendError(ctx, http.StatusBadRequest, err.Error())
		return
	}

	product := models.Product{
		Ref:          request.Ref,
		Imagem:       request.Imagem,
		Descricao:    request.Descricao,
		Tipo:         request.Tipo,
		Modelo:       request.Modelo,
		Formato:      request.Descricao,
		Complementos: request.Complementos,
		Material:     request.Material,
		Peso:         request.Peso,
		Altura:       request.Altura,
		Largura:      request.Largura,
		Comprimento:  request.Comprimento,
		Valor:        request.Valor,
		Matriz:       *request.Matriz,
		Piloto:       *request.Piloto,
		Desenho:      *request.Desenho,
	}

	if err := cc.service.CreateProduct(&product); err != nil {
		utils.SendError(ctx, http.StatusInternalServerError, "Error creating product")
		return
	}

	utils.SendSuccess(ctx, "Product created successfully", product)
}

func (cc *CatalogController) GetProducts(ctx *gin.Context) {
	products, err := cc.service.GetProducts()
	if err != nil {
		utils.SendError(ctx, http.StatusInternalServerError, "Error fetching products")
		return
	}
	utils.SendSuccess(ctx, "Products fetched successfully", products)
}
