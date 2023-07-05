import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Admin } from 'src/Database/admin.entity';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  m_id: number;

  @Column()
  u_id: number;

  @Column()
  message: string; 

//   @ManyToOne(() => Admin, (admin) => admin.users)
//   admins: Admin
}