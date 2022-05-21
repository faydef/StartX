import { Module } from '@nestjs/common';
import { FormsService } from './forms.service';
import { FormsController } from './forms.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../../ormconfig';
import { Form } from './form.entity';
@Module({
  imports: [TypeOrmModule.forRoot(config), TypeOrmModule.forFeature([Form])],
  controllers: [FormsController],
  providers: [FormsService],
  exports: [FormsService],
})
export class FormsModule { }
