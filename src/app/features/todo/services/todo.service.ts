import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TodoList, TodoListSummary, Task } from '../models/todo.models';
import { HttpClientModule } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TodoService {
  private apiUrl = 'http://localhost:3000/api/tasks'; 
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  
  getLists(): Observable<TodoListSummary[]> {
    return this.http.get<TodoListSummary[]>(`${this.baseUrl}/lists`);
  }

  getList(id: string): Observable<TodoList> {
    return this.http.get<TodoList>(`${this.baseUrl}/lists/${id}`);
  }

  addList(title: string): Observable<TodoList> {
    return this.http.post<TodoList>(`${this.baseUrl}/lists`, { title });
  }

  addTask(listId: string, task: { title: string; description: string }): Observable<Task> {
    return this.http.post<Task>(`${this.baseUrl}/lists/${listId}/tasks`, task);
  }

  toggleTask(listId: string, taskId: string): Observable<Task> {
    return this.http.put<Task>(`${this.baseUrl}/lists/${listId}/tasks/${taskId}/toggle`, {});
  }
  // Add task method
  add(listId: string, task: { title: string; description: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/lists/${listId}/tasks`, task);
  }
}
