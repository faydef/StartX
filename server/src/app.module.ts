import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../ormconfig';
import { FormsModule } from './forms/forms.module';
import { InterviewersModule } from './interviewers/interviewers.module';


@Module({
  imports: [TypeOrmModule.forRoot(config), FormsModule, InterviewersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
