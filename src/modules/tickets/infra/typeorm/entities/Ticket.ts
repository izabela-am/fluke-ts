import { Entity, Column, ObjectIdColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('tickets')
class Ticket {
  @ObjectIdColumn()
  id: string;

  @Column()
  customer_name: string;

  @Column({ unique: false })
  customer_cpf: string;

  @Column()
  customer_cellphone: string;

  @Column()
  customer_id: string;

  @Column({ default: 'OPEN' })
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Ticket;
