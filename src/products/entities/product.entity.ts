import {
  AfterInsert,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from '../../categories/entities/category.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: number;
  @Column()
  name: string;
  @Column()
  sku: string;
  @ManyToOne(() => Category, (category) => category.products)
  category_id: Category;
  // @Column('string', {array:true})
  // tags : string[];
  @Column()
  description: string;
  @Column()
  large_description: string;
  @Column()
  large_description2: string;
  @Column()
  additional_information: string;
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
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_date: Date;
  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updated_date: Date;

  @AfterInsert()
  logInsert() {
    console.log('product inserted!');
  }
}
