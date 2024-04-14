import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProductsModule } from './products/products.module';
import { Product } from './products/entities/product.entity';
import { CategoriesModule } from './categories/categories.module';
import { Category } from './categories/entities/category.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          // type: 'postgres',
          // url: config.get<string>('URL_DATABASE'),
          // synchronize: true,
          // entities: [Product, Category],
          type: 'postgres',
          host: config.get<string>('HOST'),
          database: config.get<string>('DATABASE_NAME'),
          port: config.get<number>('PORT'),
          username: config.get<string>('DB_USERNAME'),
          password: config.get<string>('DB_PASSWORD'),
          synchronize: config.get<boolean>('DB_SYNCHRONIZE'),
          entities : [Product, Category]
        };
      },
    }),
    ProductsModule,
    CategoriesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
