import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}