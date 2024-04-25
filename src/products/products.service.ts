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

  async findAll(page: number, limit: number, order: string, category : string) {
    const skip = (page - 1) * limit;
    let query = this.repository
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.category_id', 'category');

    if (category) {
      query = query.where('category.name = :category', { category });
    }
    query = query.skip(page).take(limit);

    query = query.orderBy('product.price', order as any);

    return await query.getMany();
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
