import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Form } from './form.entity';

@Injectable()
export class FormsService {
  constructor(
    @InjectRepository(Form) private formsRepository: Repository<Form>,
  ) { }

  async create(
    interviewer: string,
    candidate: string,
    rating: number,
  ): Promise<Form> {
    try {
      const newForm = await this.formsRepository.create({
        interviewer,
        candidate,
        rating,
      });
      return this.formsRepository.save(newForm);
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

  findAll(): Promise<Form[]> {
    return this.formsRepository.find();
  }

  async findOne(id: number): Promise<Form> {
    try {
      const form = await this.formsRepository.findOneOrFail(id);
      return form;
    } catch (err) {
      throw err;
    }
  }

  async findByCandidate(username: string): Promise<Form[] | undefined> {
    return this.formsRepository.find({
      where: [{ candidate: username }],
    });
  }

  async update(id: number, rating: number): Promise<Form> {
    const form = await this.findOne(id);
    form.rating = rating;
    return this.formsRepository.save(form);
  }

  async remove(id: number): Promise<Form> {
    const form = await this.findOne(id);
    return this.formsRepository.remove(form);
  }
}
