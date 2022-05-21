import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { Request } from '@nestjs/common';

@Controller({ path: '/users' })
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':username')
  findByName(@Param('username') username: string) {
    return this.usersService.findByName(username);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  @Post()
  async create(
    @Body()
    body: {
      name: string;
      email: string;
      role: string;
    },
  ) {
    console.log(body);
    return this.usersService.create(body.name, body.email, body.role);
  }
}
