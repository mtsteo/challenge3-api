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

  async findAll(limit: number, page: number) {
    const skip = (page - 1) * limit
    return await this.repository.find({
      skip,
      take: page,
      relations: { category_id: true },
    });
  }

  async findByAmount(amount: number) {
    return this.repository
      .createQueryBuilder()
      .select('*')
      .limit(amount)
      .execute();
  }

  async findByCategory(categoryName: string) {
    console.log(categoryName);
    const result = await this.repository.find({
      where: { category_id: { name: categoryName } },
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
