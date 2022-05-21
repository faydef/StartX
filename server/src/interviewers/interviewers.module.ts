import { Module } from '@nestjs/common';
import { InterviewersService } from './interviewers.service';
import { InterviewersController } from './interviewers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../../ormconfig';
import { Interviewer } from './interviewer.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([Interviewer]),
  ],
  controllers: [InterviewersController],
  providers: [InterviewersService],
  exports: [InterviewersService],
})
export class InterviewersModule { }
