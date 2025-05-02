package main

import (
	"log"
	"os"

	"github.com/danver/go-template/internal/router"
)

func main() {
	// Create router
	r := router.NewRouter()
	r.SetupRoutes()

	// Get port from environment variable or use default
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	// Start server
	log.Printf("Server starting on port %s...", port)
	if err := r.Run(":" + port); err != nil {
		log.Fatal(err)
	}
} 