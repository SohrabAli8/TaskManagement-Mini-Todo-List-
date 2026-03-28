import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskCreateDto, TaskUpdateDto, TaskReadDto } from '../../models/task.model'; // I'll update models file to match DTOs
import { TaskService } from '../../services/task.service';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  taskId: number | null = null;
  task: any = { title: '', description: '', isCompleted: false };
  isEditMode = false;

  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.taskId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.taskId) {
      this.isEditMode = true;
      this.loadTask(this.taskId);
    }
  }

  loadTask(id: number): void {
    this.taskService.getTaskById(id).subscribe(task => {
      this.task = task;
    });
  }

  saveTask(form: NgForm): void {
    if (form.invalid) return;

    if (this.isEditMode && this.taskId) {
      const updateDto: TaskUpdateDto = {
        title: this.task.title,
        description: this.task.description,
        isCompleted: this.task.isCompleted
      };
      this.taskService.updateTask(this.taskId, updateDto).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      const createDto: TaskCreateDto = {
        title: this.task.title,
        description: this.task.description
      };
      this.taskService.createTask(createDto).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
