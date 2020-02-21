import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from "./task.model";
import * as uuid from "uuid/v1";

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getAllTasks(): Task[] {
        return this.tasks;
    }
}
