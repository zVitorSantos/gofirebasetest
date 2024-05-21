package utils

import (
	"net/http"
	"github.com/gin-gonic/gin"
)

func SendSuccess(ctx *gin.Context, message string, data interface{}) {
	ctx.JSON(http.StatusOK, gin.H{
		"message": message,
		"data":    data,
	})
}

func SendError(ctx *gin.Context, statusCode int, message string) {
	ctx.JSON(statusCode, gin.H{
		"error": message,
	})
}
