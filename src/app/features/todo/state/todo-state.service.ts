import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TodoListSummary } from '../models/todo.models';
import { TodoService } from '../services/todo.service';

@Injectable({ providedIn: 'root' })
export class TodoStateService {
  private todoListsSubject = new BehaviorSubject<TodoListSummary[]>([]);
  todoLists$ = this.todoListsSubject.asObservable();

  constructor(private todoService: TodoService) {}

  loadLists() {
    this.todoService.getLists().subscribe(lists => this.todoListsSubject.next(lists));
  }
}