import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  DefaultValuePipe,
  ParseIntPipe,
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
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(16), ParseIntPipe) limit: number,
    @Query('order', new DefaultValuePipe('ASC')) order: string,
    @Query('category') category: string,
  ) {
    return this.productsService.findAll(page, limit, order, category);
  }

  @Serialize(DetailedProductDto)
  @Get('/details/:id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }
  
}
