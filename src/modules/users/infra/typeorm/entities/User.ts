import { Entity, Column, ObjectIdColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('users')
class User {
  @ObjectIdColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  cpf: string;

  @Column()
  cellphone: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  products: Array<Object>;
  
  @Column()
  tickets: Array<Object>;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default User;
