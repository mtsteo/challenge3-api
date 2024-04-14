import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Serialize } from '../interceptors/serialize.interceptor';
import { ProductDto } from './dto/product.dto';
import { DetailedProductDto } from './dto/product-detailed.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Serialize(ProductDto)
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Serialize(ProductDto)
  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Serialize(DetailedProductDto)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }

}
