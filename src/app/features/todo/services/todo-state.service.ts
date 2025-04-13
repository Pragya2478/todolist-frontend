import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TodoListSummary } from '../models/todo.models';

@Injectable({
  providedIn: 'root'
})
export class TodoStateService {
  private listsSubject = new BehaviorSubject<TodoListSummary[]>([]);
  lists$ = this.listsSubject.asObservable();

  setLists(lists: TodoListSummary[]) {
    this.listsSubject.next(lists);
  }
}
