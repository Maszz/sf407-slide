package main
import "github.com/gin-gonic/gin"

// #region snippet
func main() {
  router := gin.Default()
  router.GET("/", func(c *gin.Context) {
    c.String(200, "Hello World!")
  })

  router.Run(":3000")
}
// #endregion snippet
