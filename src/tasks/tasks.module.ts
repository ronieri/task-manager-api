import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaksRepository } from './task.repository';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([TaksRepository]), AuthModule],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
