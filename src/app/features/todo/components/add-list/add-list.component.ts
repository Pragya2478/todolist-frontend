import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { MatFormField } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
//import { MatFormFieldControl } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-list',
  standalone: true,
  imports: [CommonModule,MatButtonModule,MatFormFieldModule, MatInputModule,ReactiveFormsModule],
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.scss']
  //template: `
   // <form (ngSubmit)="add()">
    //  <mat-form-field appearance="fill">
     //   <mat-label>New List Title</mat-label>
      //  <input matInput [formControl]="title" required />
      //</mat-form-field>
      //<button mat-raised-button color="primary" type="submit">Add List</button>
    //</form>
  //`
})
export class AddListComponent {
  form: FormGroup;
  @Output() listAdded = new EventEmitter<void>();
  title = new FormControl('', Validators.required);
  //constructor(private todoService: TodoService) {}
  constructor(private fb: FormBuilder, private todoService: TodoService) {
    this.form = this.fb.group({
      title: ['', Validators.required]
    });
  }
  add() {
    if (this.title.valid) {
      this.todoService.addList(this.title.value!).subscribe(() => {
        this.title.reset();
        this.listAdded.emit();
      });
    }
  }
}