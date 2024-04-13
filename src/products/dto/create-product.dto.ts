import {
  IsBoolean,
  IsNumber,
  IsString,
  IsUrl,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;
  @IsString()
  sku: string;
  @IsString()
  description: string;
  @IsString()
  large_description: string;
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
