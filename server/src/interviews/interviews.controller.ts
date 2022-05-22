import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { InterviewsService } from './interviews.service';
import { Request } from '@nestjs/common';

@Controller({ path: '/interviews' })
export class InterviewsController {
  constructor(private readonly interviewsService: InterviewsService) { }

  @Get()
  findAll() {
    return this.interviewsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.interviewsService.findOne(+id);
  }

  @Get(':name')
  findByInterviwewer(@Param('name') name: string) {
    return this.interviewsService.findByInterviwewer(name);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.interviewsService.remove(+id);
  }

  @Post()
  async create(
    @Body()
    body: {
      interviewer: string;
      candidate: string;
      date: Date;
    },
  ) {
    console.log(body);
    return this.interviewsService.create(
      body.interviewer,
      body.candidate,
      body.date,
    );
  }
}
