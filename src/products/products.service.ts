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

  async findAll(page: number, limit: number, order: string) {
    const skip = (page - 1) * limit;
    return await this.repository.find({
      skip,
      take: limit,
      relations: { category_id: true },
      order: { price: order as any },
    });
  }

  async findByCategory(name: string, page: number, limit: number) {
    const skip = (page - 1) * limit;
    const result = await this.repository.find({
      where: { category_id: { name: name } },
      skip,
      take: limit,
    });
    if (result.length <= 0) throw new NotFoundException('Products Not Found!');
    return result;
  }

  async findOne(id: string) {
    const result = await this.repository.find({
      where: { id: id },
      relations: { category_id: true },
    });
    if (result.length <= 0) throw new NotFoundException('Product Not Found!');

    return result;
  }
}
