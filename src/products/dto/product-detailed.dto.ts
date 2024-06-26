import { Expose, Transform } from 'class-transformer';

export class DetailedProductDto {
  @Expose()
  id: string;
  @Expose()
  name: string;
  @Expose()
  sku: string;
  @Transform(({ obj }) => obj.category_id?.name)
  @Expose()
  category: number;
  @Expose()
  tags: [];
  @Expose()
  description: string;
  @Expose()
  large_description: string;
  @Expose()
  large_description2: string;
  @Expose()
  additional_information: string;
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
  other_images_link: string[];
}
