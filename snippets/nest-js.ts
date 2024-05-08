import { NestFactory } from "@nestjs/core";
import { Module, Controller, Get } from "@nestjs/common";

// #region snippet
@Controller()
class AppController {
  @Get()
  getHello(): string {
    return "Hello World!";
  }
}
@Module({
  controllers: [AppController],
})
class AppModule {}
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.log("Server running on http://localhost:3000");
}
bootstrap();
// #endregion snippet
