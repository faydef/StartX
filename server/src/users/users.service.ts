import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }

  async create(name: string, email: string, role: string): Promise<User> {
    try {
      const newUser = await this.usersRepository.create({
        name,
        email,
        role,
      });
      return this.usersRepository.save(newUser);
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

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(id: number): Promise<User> {
    try {
      const user = await this.usersRepository.findOneOrFail(id);
      return user;
    } catch (err) {
      throw err;
    }
  }

  async findByName(username: string): Promise<User[] | undefined> {
    return this.usersRepository.find({
      where: [{ name: username }],
    });
  }

  async update(id: number, email: string): Promise<User> {
    const user = await this.findOne(id);
    user.email = email;
    return this.usersRepository.save(user);
  }

  async remove(id: number): Promise<User> {
    const user = await this.findOne(id);
    return this.usersRepository.remove(user);
  }
}
