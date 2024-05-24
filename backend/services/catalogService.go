package services

import (
	"context"
	"errors"
	"log"

	"cloud.google.com/go/firestore"
	"github.com/zVitorSantos/gofirebasetest.git/models"
	"google.golang.org/api/iterator"
)

type CatalogService struct {
	db *firestore.Client
}

func NewCatalogService(db *firestore.Client) *CatalogService {
	return &CatalogService{
		db: db,
	}
}

func (s *CatalogService) CreateProduct(product *models.Product) error {
	ctx := context.Background()

	// Verificar se a referência já existe
	iter := s.db.Collection("products").Where("ref", "==", product.Ref).Documents(ctx)
	if _, err := iter.Next(); err != iterator.Done {
		if err != nil {
			log.Printf("Error checking if product ref exists: %v", err)
			return err
		}
		return errors.New("product with the given ref already exists")
	}

	_, err := s.db.Collection("products").Doc(product.Ref).Set(ctx, product)
	if err != nil {
		log.Printf("Error adding product to Firestore: %v", err)
	}
	return err
}

func (s *CatalogService) GetProducts() ([]models.Product, error) {
	ctx := context.Background()
	iter := s.db.Collection("products").Documents(ctx)
	var products []models.Product

	for {
		doc, err := iter.Next()
		if err == iterator.Done {
			break
		}
		if err != nil {
			log.Printf("Error fetching products: %v", err)
			return nil, err
		}
		var product models.Product
		if err := doc.DataTo(&product); err != nil {
			log.Printf("Error mapping Firestore document to struct: %v", err)
			return nil, err
		}
		products = append(products, product)
	}

	log.Printf("Fetched products: %+v", products)
	return products, nil
}

func (s *CatalogService) GetProductByID(id string) (*models.Product, error) {
	ctx := context.Background()
	doc, err := s.db.Collection("products").Doc(id).Get(ctx)
	if err != nil {
		return nil, err
	}
	var product models.Product
	if err := doc.DataTo(&product); err != nil {
		return nil, err
	}
	return &product, nil
}

func (s *CatalogService) UpdateProduct(id string, request *models.UpdateProductRequest) error {
	ctx := context.Background()
	docRef := s.db.Collection("products").Doc(id)
	updates := make([]firestore.Update, 0)

	if request.Imagem != nil {
		updates = append(updates, firestore.Update{Path: "imagem", Value: *request.Imagem})
	}
	if request.Descricao != nil {
		updates = append(updates, firestore.Update{Path: "descricao", Value: *request.Descricao})
	}
	if request.Tipo != nil {
		updates = append(updates, firestore.Update{Path: "tipo", Value: *request.Tipo})
	}
	if request.Modelo != nil {
		updates = append(updates, firestore.Update{Path: "modelo", Value: *request.Modelo})
	}
	if request.Formato != nil {
		updates = append(updates, firestore.Update{Path: "formato", Value: *request.Formato})
	}
	if request.Complementos != nil {
		updates = append(updates, firestore.Update{Path: "complementos", Value: *request.Complementos})
	}
	if request.Material != nil {
		updates = append(updates, firestore.Update{Path: "material", Value: *request.Material})
	}
	if request.Peso != nil {
		updates = append(updates, firestore.Update{Path: "peso", Value: *request.Peso})
	}
	if request.Altura != nil {
		updates = append(updates, firestore.Update{Path: "altura", Value: *request.Altura})
	}
	if request.Largura != nil {
		updates = append(updates, firestore.Update{Path: "largura", Value: *request.Largura})
	}
	if request.Comprimento != nil {
		updates = append(updates, firestore.Update{Path: "comprimento", Value: *request.Comprimento})
	}
	if request.Valor != nil {
		updates = append(updates, firestore.Update{Path: "valor", Value: *request.Valor})
	}
	if request.Matriz != nil {
		updates = append(updates, firestore.Update{Path: "matriz", Value: *request.Matriz})
	}
	if request.Piloto != nil {
		updates = append(updates, firestore.Update{Path: "piloto", Value: *request.Piloto})
	}
	if request.Desenho != nil {
		updates = append(updates, firestore.Update{Path: "desenho", Value: *request.Desenho})
	}

	if len(updates) == 0 {
		return errors.New("no fields to update")
	}

	_, err := docRef.Update(ctx, updates)
	return err
}

func (s *CatalogService) DeleteProduct(id string) error {
	ctx := context.Background()
	_, err := s.db.Collection("products").Doc(id).Delete(ctx)
	return err
}

// Funções de gerenciamento de configurações de catálogo

func (s *CatalogService) GetCatalogSettings() (*models.CatalogSettings, error) {
	ctx := context.Background()
	doc, err := s.db.Collection("catalogSettings").Doc("default").Get(ctx)
	if err != nil {
		log.Printf("Error getting catalog settings document: %v", err)
		return nil, err
	}

	var settings models.CatalogSettings
	if err := doc.DataTo(&settings); err != nil {
		log.Printf("Error mapping Firestore document to struct: %v", err)
		return nil, err
	}
	return &settings, nil
}
