package models

import "errors"

type Product struct {
	Ref          string  `json:"ref" firestore:"ref"`
	Imagem       string  `json:"imagem" firestore:"imagem"`
	Descricao    string  `json:"descricao" firestore:"descricao"`
	Tipo         string  `json:"tipo" firestore:"tipo"`
	Modelo       string  `json:"modelo" firestore:"modelo"`
	Formato      string  `json:"formato" firestore:"formato"`
	Complementos string  `json:"complementos" firestore:"complementos"`
	Material     string  `json:"material" firestore:"material"`
	Peso         float64 `json:"peso" firestore:"peso"`
	Altura       float64 `json:"altura" firestore:"altura"`
	Largura      float64 `json:"largura" firestore:"largura"`
	Comprimento  float64 `json:"comprimento" firestore:"comprimento"`
	Valor        float64 `json:"valor" firestore:"valor"`
	Matriz       string  `json:"matriz" firestore:"matriz"`
	Piloto       string  `json:"piloto" firestore:"piloto"`
	Desenho      string  `json:"desenho" firestore:"desenho"`
}

type CreateProductRequest struct {
	Ref          string  `json:"ref" binding:"required"`
	Descricao    string  `json:"descricao" binding:"required"`
	Tipo         string  `json:"tipo" binding:"required"`
	Imagem       string  `json:"imagem"`
	Modelo       string  `json:"modelo"`
	Formato      string  `json:"formato"`
	Complementos string  `json:"complementos"`
	Material     string  `json:"material"`
	Peso         float64 `json:"peso"`
	Altura       float64 `json:"altura"`
	Largura      float64 `json:"largura"`
	Comprimento  float64 `json:"comprimento"`
	Valor        float64 `json:"valor"`
	Matriz       *string `json:"matriz"`
	Piloto       *string `json:"piloto"`
	Desenho      *string `json:"desenho"`
}

func (r *CreateProductRequest) Validate() error {
	if r.Ref == "" || r.Descricao == "" || r.Tipo == "" {
		return errors.New("ref, descricao, and tipo are required fields")
	}
	return nil
}

type UpdateProductRequest struct {
	Imagem       *string  `json:"imagem"`
	Descricao    *string  `json:"descricao"`
	Tipo         *string  `json:"tipo"`
	Modelo       *string  `json:"modelo"`
	Formato      *string  `json:"formato"`
	Complementos *string  `json:"complementos"`
	Material     *string  `json:"material"`
	Peso         *float64 `json:"peso"`
	Altura       *float64 `json:"altura"`
	Largura      *float64 `json:"largura"`
	Comprimento  *float64 `json:"comprimento"`
	Valor        *float64 `json:"valor"`
	Matriz       *string  `json:"matriz"`
	Piloto       *string  `json:"piloto"`
	Desenho      *string  `json:"desenho"`
}

func (r *UpdateProductRequest) Validate() error {
	if r.Imagem == nil && r.Descricao == nil && r.Tipo == nil && r.Modelo == nil && r.Formato == nil && r.Peso == nil && r.Altura == nil && r.Largura == nil && r.Comprimento == nil && r.Valor == nil && r.Matriz == nil && r.Piloto == nil && r.Desenho == nil {
		return errors.New("no fields to update")
	}
	return nil
}