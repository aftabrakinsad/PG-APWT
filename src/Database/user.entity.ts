import { Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import { Admin } from 'src/Database/admin.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  u_id: number;

  @Column()
  u_name: string;

  @Column()
  email: string;

  @Column()
  password: string; 

  @ManyToOne(() => Admin, (admin) => admin.users)
  admins: Admin
}