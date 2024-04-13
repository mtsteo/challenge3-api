import { AfterInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  sku: string;
  //   category_id : number
  @Column()
  description: string;
  @Column()
  large_description: string;
  @Column()
  price: number;
  @Column()
  discount_price: number;
  @Column()
  discount_percent: number;
  @Column()
  is_new: boolean;
  @Column()
  image_link: string;
  @Column()
  other_images_link: string;
  //   created_date : Date;
  //   updated_date : Date;

  @AfterInsert()
  logInsert() {
    console.log("product inserted!")
  }
}
