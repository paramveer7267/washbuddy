import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import { TrimEmptyValuesPipe } from './common/pipes/trim-empty-values.pipe';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      'http://localhost:5173',
      'https://admin.afeska.com',
      'http://localhost:3000',
    ],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
  });

  app.use(cookieParser());

  app.useGlobalPipes(
    new TrimEmptyValuesPipe(), // cleans all empty strings globally
    new ValidationPipe({
      // ✅ Removes any properties not present in the DTO class
      // This keeps your input clean and safe — no extra unwanted fields from the frontend
      whitelist: true,

      // 🚫 When true, throws an error if the user sends extra fields
      // You set it to false — so extra fields will simply be stripped instead of causing 400
      forbidNonWhitelisted: false,

      // 🔄 Automatically transforms input data to match the DTO types
      // Example: converts string to number, string[] to array, etc.
      transform: true,

      // 🚧 If true, it ignores missing fields during validation
      // You set it to false — so required fields must be provided (good for create/update)
      skipMissingProperties: false,

      // ⚙️ Fine-tunes how class-transformer behaves
      transformOptions: {
        // 💡 Automatically converts primitives when possible
        // Example: "123" → 123, "true" → true
        enableImplicitConversion: true,
      },
    }),
  );
  app.setGlobalPrefix('api/v1');
  await app.listen(process.env.PORT || 5000);
  console.log(
    `🚀 Server running on http://localhost:${process.env.PORT}/api/v1`,
  );
  mongoose.connection.once('open', () => {
    console.log(
      '✅ MongoDB Connected Successfully to:',
      mongoose.connection.name,
    );
  });
}
bootstrap();
