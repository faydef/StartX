import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Interviewer } from './interviewer.entity';

@Injectable()
export class InterviewersService {
  constructor(
    @InjectRepository(Interviewer)
    private interviewersRepository: Repository<Interviewer>,
  ) { }

  async create(name: string, email: string): Promise<Interviewer> {
    try {
      const newInterviewer = await this.interviewersRepository.create({
        name,
        email,
      });
      return this.interviewersRepository.save(newInterviewer);
    } catch (err) {
      if (
        err instanceof ForbiddenException ||
        err instanceof BadRequestException
      ) {
        throw err;
      } else {
        throw new NotFoundException();
      }
    }
  }

  findAll(): Promise<Interviewer[]> {
    return this.interviewersRepository.find();
  }

  async findOne(id: number): Promise<Interviewer> {
    try {
      const interviewer = await this.interviewersRepository.findOneOrFail(id);
      return interviewer;
    } catch (err) {
      throw err;
    }
  }

  async findByName(username: string): Promise<Interviewer[] | undefined> {
    return this.interviewersRepository.find({
      where: [{ name: username }],
    });
  }

  async update(id: number, email: string): Promise<Interviewer> {
    const interviewer = await this.findOne(id);
    interviewer.email = email;
    return this.interviewersRepository.save(interviewer);
  }

  async remove(id: number): Promise<Interviewer> {
    const interviewer = await this.findOne(id);
    return this.interviewersRepository.remove(interviewer);
  }
}
