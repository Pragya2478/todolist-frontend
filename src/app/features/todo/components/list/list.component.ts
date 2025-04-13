import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoStateService } from '../../state/todo-state.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddListComponent } from '../add-list/add-list.component';
import { MatFormField } from '@angular/material/form-field';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, AddListComponent, RouterModule],
  templateUrl: './list.component.html',
  //styleUrls: ['./list.component.css']
  //template: `
    //<mat-toolbar>To-Do Lists</mat-toolbar>
    //<div style="padding: 1rem">
      //<app-add-list (listAdded)="refresh()"></app-add-list>
      //<mat-card *ngFor="let list of todoState.todoLists$ | async" (click)="goToList(list.id)" style="margin: 0.5rem 0; cursor: pointer;">
        //<h3>{{ list.title }}</h3>
        //<p>Total: {{ list.total }} | Completed: {{ list.completed }}</p>
      //</mat-card>
    //</div>
  //`
})
export class ListComponent implements OnInit {
  constructor(public todoState: TodoStateService, private router: Router) {}
  ngOnInit() { this.todoState.loadLists(); }
  goToList(id: string) { this.router.navigate(['/lists', id]); }
  refresh() { this.todoState.loadLists(); }
}