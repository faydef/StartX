import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Interviewer {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  creationDate: Date;

  @Column({ unique: true })
  name: string;

  @Column({ unique: true })
  email: string;
}
