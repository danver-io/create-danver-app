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

func handleGetUsers(c *gin.Context) {
	response := IResponse{
		Data:    []IUser{},
		Status:  http.StatusOK,
		Success: true,
	}
	c.JSON(http.StatusOK, response)
}

func handleCreateUser(c *gin.Context) {
	var user IUser
	if err := c.ShouldBindJSON(&user); err != nil {
		response := IResponse{
			Status:  http.StatusBadRequest,
			Error:   "Invalid request body",
			Success: false,
		}
		c.JSON(http.StatusBadRequest, response)
		return
	}

	user.ID = "1" // TODO: Generate proper ID
	user.CreatedAt = time.Now()
	user.UpdatedAt = time.Now()

	response := IResponse{
		Data:    user,
		Status:  http.StatusCreated,
		Success: true,
	}
	c.JSON(http.StatusCreated, response)
}

func handleGetUser(c *gin.Context) {
	id := c.Param("id")
	response := IResponse{
		Data: IUser{
			ID:        id,
			Name:      "John Doe",
			Email:     "john@example.com",
			CreatedAt: time.Now(),
			UpdatedAt: time.Now(),
		},
		Status:  http.StatusOK,
		Success: true,
	}
	c.JSON(http.StatusOK, response)
}

func handleUpdateUser(c *gin.Context) {
	id := c.Param("id")
	var user IUser
	if err := c.ShouldBindJSON(&user); err != nil {
		response := IResponse{
			Status:  http.StatusBadRequest,
			Error:   "Invalid request body",
			Success: false,
		}
		c.JSON(http.StatusBadRequest, response)
		return
	}

	user.ID = id
	user.UpdatedAt = time.Now()

	response := IResponse{
		Data:    user,
		Status:  http.StatusOK,
		Success: true,
	}
	c.JSON(http.StatusOK, response)
}

func handleDeleteUser(c *gin.Context) {
	response := IResponse{
		Status:  http.StatusOK,
		Success: true,
	}
	c.JSON(http.StatusOK, response)
} 