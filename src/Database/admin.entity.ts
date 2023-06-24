import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}