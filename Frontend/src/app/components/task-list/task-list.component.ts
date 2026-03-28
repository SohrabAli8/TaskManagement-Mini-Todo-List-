import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskReadDto } from '../../models/task.model';
import { TaskService } from '../../services/task.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: TaskReadDto[] = [];
  loading = true;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.loading = true;
    this.taskService.getAllTasks().subscribe(tasks => {
      this.tasks = tasks;
      this.loading = false;
    });
  }

  toggleComplete(task: TaskReadDto): void {
    if (task.id) {
        const updateTask = {
            title: task.title,
            description: task.description,
            isCompleted: !task.isCompleted
        };
      this.taskService.updateTask(task.id, updateTask).subscribe(() => {
        task.isCompleted = !task.isCompleted;
      });
    }
  }

  isModalOpen = false;
  taskIdToDelete: number | null = null;

  deleteTask(event: Event, id: number): void {
    event.stopPropagation(); // Prevents row navigation if it exists
    this.taskIdToDelete = id;
    this.isModalOpen = true;
  }

  confirmDelete(): void {
    if (this.taskIdToDelete !== null) {
      this.taskService.deleteTask(this.taskIdToDelete).subscribe(() => {
        this.tasks = this.tasks.filter(t => t.id !== this.taskIdToDelete);
        this.closeModal();
      });
    }
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.taskIdToDelete = null;
  }

  trackById(index: number, item: TaskReadDto): number {
    return item.id;
  }
}
