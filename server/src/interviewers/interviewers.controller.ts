import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { InterviewersService } from './interviewers.service';
import { Request } from '@nestjs/common';

@Controller({ path: '/interviewers' })
export class InterviewersController {
  constructor(private readonly interviewersService: InterviewersService) { }

  @Get()
  findAll() {
    return this.interviewersService.findAll();
  }

  @Get(':username')
  findByName(@Param('username') username: string) {
    return this.interviewersService.findByName(username);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.interviewersService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.interviewersService.remove(+id);
  }

  @Post()
  async create(
    @Body()
    body: {
      name: string;
      email: string;
    },
  ) {
    console.log(body);
    return this.interviewersService.create(body.name, body.email);
  }
}
