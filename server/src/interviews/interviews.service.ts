import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Interview } from './interview.entity';

@Injectable()
export class InterviewsService {
  constructor(
    @InjectRepository(Interview) private interviewsRepository: Repository<Interview>,
  ) { }

  async create(
    interviewer: string,
    candidate: string,
    date: Date,
  ): Promise<Interview> {
    try {
      const newInterview = await this.interviewsRepository.create({
        interviewer,
        candidate,
        date,
      });
      return this.interviewsRepository.save(newInterview);
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

  findAll(): Promise<Interview[]> {
    return this.interviewsRepository.find();
  }

  async findOne(id: number): Promise<Interview> {
    try {
      const interview = await this.interviewsRepository.findOneOrFail(id);
      return interview;
    } catch (err) {
      throw err;
    }
  }

  async findByCandidate(username: string): Promise<Interview[] | undefined> {
    return this.interviewsRepository.find({
      where: [{ candidate: username }],
    });
  }

  async update(id: number, date: Date): Promise<Interview> {
    const interview = await this.findOne(id);
    interview.date = date;
    return this.interviewsRepository.save(interview);
  }

  async remove(id: number): Promise<Interview> {
    const interview = await this.findOne(id);
    return this.interviewsRepository.remove(interview);
  }
}
