import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductsModule } from './products/products.module';
import { Product } from './products/entities/product.entity';
import { CategoriesModule } from './categories/categories.module';
import { Category } from './categories/entities/category.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      synchronize: true,
      entities: [Product, Category],
    }),
    ProductsModule,
    CategoriesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
