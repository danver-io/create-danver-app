package router

import (
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

// IRouter defines the router interface
type IRouter struct {
	engine *gin.Engine
}

// NewRouter creates a new router instance
func NewRouter() *IRouter {
	router := gin.Default()

	// CORS 설정
	config := cors.DefaultConfig()
	config.AllowOrigins = []string{
		"http://localhost:3000", // React 개발 서버
		"http://localhost:5173", // Vite 개발 서버
		"http://127.0.0.1:3000",
		"http://127.0.0.1:5173",
	}
	config.AllowMethods = []string{"GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"}
	config.AllowHeaders = []string{
		"Origin",
		"Content-Type",
		"Content-Length",
		"Accept-Encoding",
		"X-CSRF-Token",
		"Authorization",
		"Accept",
		"Cache-Control",
		"X-Requested-With",
	}
	config.ExposeHeaders = []string{"Content-Length"}
	config.AllowCredentials = true
	config.MaxAge = 12 * time.Hour

	router.Use(cors.New(config))

	return &IRouter{
		engine: router,
	}
}

// SetupRoutes configures all the routes
func (r *IRouter) SetupRoutes() {
	// Root path
	r.engine.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "Welcome to the API",
			"status": "ok",
		})
	})

	// Health check
	r.engine.GET("/health", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"status": "ok",
		})
	})

	// User routes
	userGroup := r.engine.Group("/users")
	{
		userGroup.GET("", handleGetUsers)
		userGroup.POST("", handleCreateUser)
		userGroup.GET("/:id", handleGetUser)
		userGroup.PUT("/:id", handleUpdateUser)
		userGroup.DELETE("/:id", handleDeleteUser)
	}
}

// Run starts the server
func (r *IRouter) Run(addr string) error {
	return r.engine.Run(addr)
} 