import { Component, Input ,Output,EventEmitter} from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms'; 
//import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule,MatToolbarModule,MatFormFieldModule,ReactiveFormsModule, MatCardModule, MatCheckboxModule],
  templateUrl: './add-task.component.html',
  //styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Input() listId!: string;  // Make sure listId is a valid string
  //@Input() listId!: number;  // listId should be a string
  @Output() taskAdded = new EventEmitter<void>();
  form: FormGroup;


  constructor(private fb: FormBuilder, private todoService: TodoService) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  add(): void {
    if (this.form.valid) {
      const formValue = this.form.value;
      const task = {
        title: formValue.title || '',  // Ensure title is never null or undefined
        description: formValue.description || ''  // Ensure description is never null or undefined
      };

      // Call the service with the correct method
      this.todoService.add(this.listId, task).subscribe(() => {
        // Add any handling or response actions here (e.g., reset form, notify user)
        this.taskAdded.emit()
        //this.form.reset();  // Optional: Reset form after successful add
      });
    }
  }
}
