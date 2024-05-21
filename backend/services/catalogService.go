package services

import (
	"context"

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
	_, _, err := s.db.Collection("products").Add(ctx, product)
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
			return nil, err
		}
		var product models.Product
		if err := doc.DataTo(&product); err != nil {
			return nil, err
		}
		products = append(products, product)
	}
	return products, nil
}
