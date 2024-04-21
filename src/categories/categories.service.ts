import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';
import { ProductsService } from '../products/products.service';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category) private repository: Repository<Category>,
    private productService: ProductsService,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const category = this.repository.create(createCategoryDto);
    return await this.repository.save(category);
  }

  async findAll() {
    return await this.repository.find();
  }

}
