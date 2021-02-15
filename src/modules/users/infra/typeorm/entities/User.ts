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

  @Column({ default: ' ' })
  products_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default User;
