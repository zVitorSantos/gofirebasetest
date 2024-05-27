package controllers

import (
	"log"
	"net/http"
	"strings"

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
		log.Printf("Error binding JSON: %v", err)
		utils.SendError(ctx, http.StatusBadRequest, "Invalid request")
		return
	}

	log.Printf("CreateProductRequest received: %+v", request)

	if err := request.Validate(); err != nil {
		log.Printf("Validation error: %v", err)
		utils.SendError(ctx, http.StatusBadRequest, err.Error())
		return
	}

	product := models.Product{
		Ref:          request.Ref,
		Imagem:       request.Imagem,
		Descricao:    request.Descricao,
		Tipo:         request.Tipo,
		Modelo:       request.Modelo,
		Formato:      request.Formato,
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
		log.Printf("Error creating product: %v", err)
		if err.Error() == "product with the given ref already exists" {
			utils.SendError(ctx, http.StatusBadRequest, "Produto com essa referência já existe.")
		} else {
			utils.SendError(ctx, http.StatusInternalServerError, "Error creating product")
		}
		return
	}

	utils.SendSuccess(ctx, "Product created successfully", product)
}

func (cc *CatalogController) GetProducts(ctx *gin.Context) {
	user, exists := ctx.Get("user")
	defaultTypes := []string{"Enfeite", "Enfeite Montado"}

	if !exists {
		products, err := cc.service.GetProductsByTypes(defaultTypes)
		if err != nil {
			utils.SendError(ctx, http.StatusInternalServerError, "Error fetching products")
			return
		}
		utils.SendSuccess(ctx, "Products fetched successfully", products)
		return
	}

	userModel, ok := user.(*models.User)
	if !ok {
		log.Printf("Failed to convert user context to models.User")
		utils.SendError(ctx, http.StatusInternalServerError, "Error fetching user information")
		return
	}

	userPermissions := userModel.Permissions

	// Log de depuração para verificar as permissões do usuário
	log.Printf("User permissions: %v", userPermissions)

	if contains(userPermissions, "view_all_types") {
		products, err := cc.service.GetAllProducts()
		if err != nil {
			utils.SendError(ctx, http.StatusInternalServerError, "Error fetching products")
			return
		}
		utils.SendSuccess(ctx, "Products fetched successfully", products)
		return
	}

	viewTypes := defaultTypes
	for _, permission := range userPermissions {
		if strings.HasPrefix(permission, "view_type:") {
			viewTypes = append(viewTypes, strings.Split(permission, ":")[1])
		}
	}

	products, err := cc.service.GetProductsByTypes(viewTypes)
	if err != nil {
		utils.SendError(ctx, http.StatusInternalServerError, "Error fetching products")
		return
	}
	utils.SendSuccess(ctx, "Products fetched successfully", products)
}

// Função auxiliar para verificar se uma lista contém um elemento
func contains(slice []string, item string) bool {
	for _, s := range slice {
		if s == item {
			return true
		}
	}
	return false
}

// Os outros métodos permanecem inalterados
func (cc *CatalogController) GetProductByID(ctx *gin.Context) {
	id := ctx.Param("id")
	product, err := cc.service.GetProductByID(id)
	if err != nil {
		utils.SendError(ctx, http.StatusInternalServerError, "Error fetching product")
		return
	}
	if product == nil {
		utils.SendError(ctx, http.StatusNotFound, "Product not found")
		return
	}
	utils.SendSuccess(ctx, "Product fetched successfully", product)
}

func (cc *CatalogController) UpdateProduct(ctx *gin.Context) {
	id := ctx.Param("id")
	var request models.UpdateProductRequest
	if err := ctx.ShouldBindJSON(&request); err != nil {
		utils.SendError(ctx, http.StatusBadRequest, "Invalid request")
		return
	}

	if err := request.Validate(); err != nil {
		utils.SendError(ctx, http.StatusBadRequest, err.Error())
		return
	}

	if err := cc.service.UpdateProduct(id, &request); err != nil {
		utils.SendError(ctx, http.StatusInternalServerError, "Error updating product")
		return
	}

	utils.SendSuccess(ctx, "Product updated successfully", nil)
}

func (cc *CatalogController) DeleteProduct(ctx *gin.Context) {
	id := ctx.Param("id")
	if err := cc.service.DeleteProduct(id); err != nil {
		utils.SendError(ctx, http.StatusInternalServerError, "Error deleting product")
		return
	}
	utils.SendSuccess(ctx, "Product deleted successfully", nil)
}

func (cc *CatalogController) GetCatalogSettings(ctx *gin.Context) {
	settings, err := cc.service.GetCatalogSettings()
	if err != nil {
		log.Printf("Error fetching catalog settings: %v", err)
		utils.SendError(ctx, http.StatusInternalServerError, "Error fetching catalog settings")
		return
	}
	utils.SendSuccess(ctx, "Catalog settings fetched successfully", settings)
}