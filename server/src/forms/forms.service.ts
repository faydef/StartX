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
    ratingPC: number,
    ratingTD: number,
    ratingEX: number,
    ratingID: number,
    notePC: string,
    noteTD: string,
    noteEX: string,
    noteID: string,
  ): Promise<Form> {
    try {
      const newForm = await this.formsRepository.create({
        candidate,
        interviewer,
        ratingPC,
        ratingTD,
        ratingEX,
        ratingID,
        notePC,
        noteTD,
        noteEX,
        noteID,
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
      console.log(form);
      return form;
    } catch (err) {
      throw err;
    }
  }

  async findByCandidate(username: string): Promise<Form[] | undefined> {
    const candidate = await this.formsRepository.find({
      where: { candidate: username },
    });
    console.log(candidate)
    return candidate;
  }

  async update(id: number, ratingID: number): Promise<Form> {
    const form = await this.findOne(id);
    form.ratingID = ratingID;
    return this.formsRepository.save(form);
  }

  async remove(id: number): Promise<Form> {
    const form = await this.findOne(id);
    return this.formsRepository.remove(form);
  }
}
