import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1')

  // Configuración de la validación de los datos de entrada
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Elimina los campos que no están definidos en el DTO
      forbidNonWhitelisted: true, // Lanza un error si se envían campos no permitidos
      transform: true, // Convierte los datos de entrada a los tipos definidos en los DTOs
    })
  )

  await app.listen(process.env.PORT ?? 3000)
}
bootstrap();
