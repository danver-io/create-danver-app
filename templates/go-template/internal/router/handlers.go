package router

import (
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
)

// IUser represents a user in the system
type IUser struct {
	ID        string    `json:"id"`
	Name      string    `json:"name"`
	Email     string    `json:"email"`
	CreatedAt time.Time `json:"createdAt"`
	UpdatedAt time.Time `json:"updatedAt"`
}

// IResponse is the standard response structure
type IResponse struct {
	Data    interface{} `json:"data,omitempty"`
	Status  int        `json:"status"`
	Error   string     `json:"error,omitempty"`
	Success bool       `json:"success"`
}

// Response helpers
func successResponse(c *gin.Context, status int, data interface{}) {
	c.JSON(status, IResponse{
		Data:    data,
		Status:  status,
		Success: true,
	})
}

func errorResponse(c *gin.Context, status int, err string) {
	c.JSON(status, IResponse{
		Status:  status,
		Error:   err,
		Success: false,
	})
}

func handleGetUsers(c *gin.Context) {
	successResponse(c, http.StatusOK, []IUser{})
}

func handleCreateUser(c *gin.Context) {
	var user IUser
	if err := c.ShouldBindJSON(&user); err != nil {
		errorResponse(c, http.StatusBadRequest, "Invalid request body")
		return
	}

	user.ID = "1" // TODO: Generate proper ID
	user.CreatedAt = time.Now()
	user.UpdatedAt = time.Now()

	successResponse(c, http.StatusCreated, user)
}

func handleGetUser(c *gin.Context) {
	id := c.Param("id")
	successResponse(c, http.StatusOK, IUser{
		ID:        id,
		Name:      "John Doe",
		Email:     "john@example.com",
		CreatedAt: time.Now(),
		UpdatedAt: time.Now(),
	})
}

func handleUpdateUser(c *gin.Context) {
	id := c.Param("id")
	var user IUser
	if err := c.ShouldBindJSON(&user); err != nil {
		errorResponse(c, http.StatusBadRequest, "Invalid request body")
		return
	}

	user.ID = id
	user.UpdatedAt = time.Now()

	successResponse(c, http.StatusOK, user)
}

func handleDeleteUser(c *gin.Context) {
	successResponse(c, http.StatusOK, nil)
} 