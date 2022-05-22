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
      ratingPC: number;
      ratingTD: number;
      ratingEX: number;
      ratingID: number;
      notePC: string;
      noteTD: string;
      noteEX: string;
      noteID: string;
    },
  ) {
    console.log(body);
    return this.formsService.create(
      body.interviewer,
      body.candidate,
      body.ratingPC,
      body.ratingTD,
      body.ratingEX,
      body.ratingID,
      body.notePC,
      body.noteTD,
      body.noteEX,
      body.noteID,
    );
  }
}
