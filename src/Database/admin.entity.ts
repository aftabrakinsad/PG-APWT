import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { Message } from './message.entity';

@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  a_id: number;

  @Column()
  a_name: string;

  @Column()
  email: string;

  @Column()
  password: string; 

  @OneToMany(() => User, (user) => user.admins)
  users: User[]

  // @OneToMany(() => Message, (message) => message.admins)
  // messages: Message[]
}