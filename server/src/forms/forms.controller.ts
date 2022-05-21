import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { FormsService } from './forms.service';
import { Request } from '@nestjs/common';

@Controller({ path: '/forms' })
export class FormsController {
  constructor(private readonly formsService: FormsService) { }

  @Get()
  findAll() {
    return this.formsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.formsService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.formsService.remove(+id);
  }

  @Post()
  async create(
    @Body()
    body: {
      interviewer: string;
      candidate: string;
      rating: number;
    },
  ) {
    console.log(body)
    return this.formsService.create(
      body.interviewer,
      body.candidate,
      body.rating,
    );
  }
}
