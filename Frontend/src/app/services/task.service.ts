import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskReadDto, TaskCreateDto, TaskUpdateDto } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'https://localhost:7040/api/tasks';

  constructor(private http: HttpClient) { }

  getAllTasks(): Observable<TaskReadDto[]> {
    return this.http.get<TaskReadDto[]>(this.apiUrl);
  }

  getTaskById(id: number): Observable<TaskReadDto> {
    return this.http.get<TaskReadDto>(`${this.apiUrl}/${id}`);
  }

  createTask(task: TaskCreateDto): Observable<TaskReadDto> {
    return this.http.post<TaskReadDto>(this.apiUrl, task);
  }

  updateTask(id: number, task: TaskUpdateDto): Observable<TaskReadDto> {
    return this.http.put<TaskReadDto>(`${this.apiUrl}/${id}`, task);
  }

  deleteTask(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`);
  }
}
