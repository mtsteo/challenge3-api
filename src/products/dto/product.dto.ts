import { Expose, Transform } from 'class-transformer';

export class ProductDto {
  @Expose()
  id: string;
  @Expose()
  name: string;
  @Expose()
  description: string;
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
}
