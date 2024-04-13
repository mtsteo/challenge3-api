import { Expose, Transform } from 'class-transformer';

export class ProductDto {
  @Expose()
  name: string;
  @Expose()
  sku: string;
  @Transform(({obj})=>obj.category_id?.name)
  @Expose()
  category: string;
  @Expose()
  description: string;
  @Expose()
  large_description: string;
  @Expose()
  price: number;
  @Expose()
  discount_price: number;
  @Expose()
  discount_percent: number;
  @Expose()
  is_new: boolean;
  @Expose()
  image_link: string;
  @Expose()
  other_images_link: string;
}
