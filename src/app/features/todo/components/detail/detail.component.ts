import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../../services/todo.service';
import { TodoList } from '../../models/todo.models';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatCardModule, MatCheckboxModule, AddTaskComponent],
  //templateUrl: './detail.component.html',
  template: `
    <div *ngIf="list">
      <mat-toolbar>{{ list.title }}</mat-toolbar>
      <div style="padding: 1rem">
        <app-add-task [listId]="list.id.toString()" (taskAdded)="load()"></app-add-task>
        <mat-card *ngFor="let task of list.tasks">
          <mat-checkbox [checked]="task.completed" (change)="toggle(task.id)">{{ task.title }}</mat-checkbox>
          <p>{{ task.description }}</p>
        </mat-card>
      </div>
    </div>
  `
})
export class DetailComponent implements OnInit {
  //listEg = { id: '1', title: 'Groceries', tasks: [] };
  //list!: TodoList;
  list: any;
  listId: number | null = null;
  constructor(private route: ActivatedRoute, private todoService: TodoService) {
      this.route.params.subscribe(params => {
        this.listId = +params['id'];  // Fetch the ID from route params
      });
  }
  ngOnInit() { this.load(); }
  load() {
    console.log('Load function called');
    const id = this.route.snapshot.paramMap.get('id')!;
    this.todoService.getList(id).subscribe(list => this.list = list);
  }
  toggle(taskId: string) {
    this.todoService.toggleTask(this.list.id.toString(), taskId).subscribe(() => this.load());
  }
}