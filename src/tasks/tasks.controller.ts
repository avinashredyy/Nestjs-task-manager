import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { CretaeTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService) {}

    @Get()
    getTasks(): Task[] {
        return this.taskService.getAllTasks();
    }

    @Post()
    createTask(@Body() cretaeTaskDto: CretaeTaskDto): Task {
        return this.taskService.createTask(cretaeTaskDto);
    }
}
