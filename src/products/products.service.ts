import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private repository: Repository<Product>,
  ) {}
  create(createProductDto: CreateProductDto) {
    const product = this.repository.create(createProductDto);
    return this.repository.save(product);
  }

  findAll() {
    return this.repository.find({ relations: { category_id: true } });
  }

  async findByCategory(categoryName: string) {
    const result = await this.repository.find({
      where: { category_id: { name: categoryName } },
    });
    if (result.length <= 0) throw new NotFoundException('Products Not Found!');
    return result;
  }

  async findOne(id: string) {
    const result = await this.repository.find({ where: { id: id } });
    if (result.length <= 0) throw new NotFoundException('Product Not Found!');

    return result;
  }
}
