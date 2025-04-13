import { Component, OnInit } from '@angular/core';
import { TodoService } from './features/todo/services/todo.service';
import { TodoStateService } from './features/todo/services/todo-state.service';
import { TodoListSummary } from './features/todo/models/todo.models';
import { RouterModule, RouterOutlet } from '@angular/router';
import { materialImports } from './shared/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule,RouterOutlet,materialImports] 
})
export class AppComponent implements OnInit {
  lists: TodoListSummary[] = [];
  title = 'Todo App';
  constructor(
    private todoService: TodoService,
    private todoStateService: TodoStateService
  ) {}

  ngOnInit() {
    this.todoService.getLists().subscribe((lists) => {
      this.lists = lists;
      this.todoStateService.setLists(lists);
    });
  }
}
