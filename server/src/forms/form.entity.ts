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
  rating: number;

  @ManyToOne(() => User, (user) => user.forms)
  user: User;
}
