import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity('products')
class Product {
  @ObjectIdColumn()
  id: string;

  @Column()
  price: number;

  @Column()
  package_name: string;
}

export default Product;
