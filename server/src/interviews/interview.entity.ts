import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from 'src/users/user.entity';

@Entity()
export class Interview {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  creationDate: Date;

  @Column()
  interviewer: string;

  @Column()
  candidate: string;

  @Column()
  date: string;

  @ManyToMany(() => User, (user) => user.interviews)
  @JoinTable()
  attendees: User[];
}
