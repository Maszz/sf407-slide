package main
import "github.com/gofiber/fiber/v2"

// #region snippet 
func main() {
  app := fiber.New()
  app.Get("/", func(c *fiber.Ctx) error {
    return c.SendString("Hello World!")
  })

  app.Listen(":3000")
}
// #endregion snippet
