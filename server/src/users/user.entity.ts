import { Form } from 'src/forms/form.entity';
import { Interview } from 'src/interviews/interview.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  creationDate: Date;

  @Column({ unique: true })
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  role: string;

  @OneToMany(() => Form, (form) => form.user)
  forms: Form[];

  @ManyToMany(() => Interview, (interview) => interview.attendees)
  interviews: Interview[];
}
