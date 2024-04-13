import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
  AfterInsert,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { Product } from '../../products/entities/product.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: number;
  @Column()
  name: string;
  @Column()
  image_link: string;
  @OneToMany(()=>Product,(product)=> product.category_id )
  products : Product[]
  //     @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  //     created_date : Date;
  //     @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  //     updated_date : Date;
  @AfterInsert()
  logInsert() {
    console.log('Category inserted!');
  }
}
