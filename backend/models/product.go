package models

import "errors"

type Product struct {
	ID           string  `json:"id" firestore:"id"`
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
	Imagem       string  `json:"imagem" binding:"required"`
	Descricao    string  `json:"descricao" binding:"required"`
	Tipo         string  `json:"tipo" binding:"required"`
	Modelo       string  `json:"modelo" binding:"required"`
	Formato      string  `json:"formato" binding:"required"`
	Complementos string  `json:"complementos"`
	Material     string  `json:"material"`
	Peso         float64 `json:"peso" binding:"required"`
	Altura       float64 `json:"altura" binding:"required"`
	Largura      float64 `json:"largura" binding:"required"`
	Comprimento  float64 `json:"comprimento" binding:"required"`
	Valor        float64 `json:"valor" binding:"required"`
	Matriz       *string `json:"matriz" binding:"required"`
	Piloto       *string `json:"piloto" binding:"required"`
	Desenho      *string `json:"desenho" binding:"required"`
}

func (r *CreateProductRequest) Validate() error {
	if r.Ref == "" || r.Imagem == "" || r.Descricao == "" || r.Tipo == "" || r.Modelo == "" || r.Formato == "" || r.Peso == 0 || r.Altura == 0 || r.Largura == 0 || r.Comprimento == 0 || r.Valor == 0 || r.Matriz == nil || r.Piloto == nil || r.Desenho == nil {
		return errors.New("missing required fields")
	}
	return nil
}
