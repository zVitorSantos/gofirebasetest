package models

type CatalogSettings struct {
    Types      []string `json:"types" firestore:"types"`
    Models     []string `json:"models" firestore:"models"`
    Formats    []string `json:"formats" firestore:"formats"`
    Complements []string `json:"complements" firestore:"complements"`
}
