import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../ormconfig';
import { FormsModule } from './forms/forms.module';
import { UsersModule } from './users/users.module';
import { InterviewsModule } from './interviews/interviews.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    FormsModule,
    UsersModule,
    InterviewsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
