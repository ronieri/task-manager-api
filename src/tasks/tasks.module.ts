import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaksRepository } from './task.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TaksRepository])],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
