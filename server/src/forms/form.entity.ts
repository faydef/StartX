import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from 'src/users/user.entity';

@Entity()
export class Form {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  creationDate: Date;

  @Column()
  interviewer: string;

  @Column()
  candidate: string;

  @Column()
  ratingPC: number;

  @Column()
  ratingTD: number;

  @Column()
  ratingEX: number;

  @Column()
  ratingID: number;

  @Column()
  notePC: string;

  @Column()
  noteTD: string;

  @Column()
  noteEX: string;

  @Column()
  noteID: string;

  @ManyToOne(() => User, (user) => user.forms)
  user: User;
}
