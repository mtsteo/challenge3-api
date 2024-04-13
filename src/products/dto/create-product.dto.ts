import { IsBoolean, IsNumber, IsString, IsUrl } from 'class-validator';
import { Category } from '../../categories/entities/category.entity';

export class CreateProductDto {
  @IsString()
  name: string;
  @IsString()
  sku: string;
  @IsString()
  category_id: Category;
  @IsString()
  description: string;
  @IsString()
  large_description: string;
  @IsString()
  large_description2: string;
  @IsString()
  additional_information: string;
  @IsNumber()
  price: number;
  @IsNumber()
  discount_price: number;
  @IsNumber()
  discount_percent: number;
  @IsBoolean()
  is_new: boolean;
  @IsUrl()
  image_link: string;
  @IsUrl()
  other_images_link: string;
}
