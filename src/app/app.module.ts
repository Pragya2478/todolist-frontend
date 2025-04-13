import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutes } from './app.routes';
import { CommonModule } from '@angular/common'; 

import { AppComponent } from './app.component';
import { ListComponent } from './features/todo/components/list/list.component';
import { DetailComponent } from './features/todo/components/detail/detail.component';
import { AddListComponent } from './features/todo/components/add-list/add-list.component';
import { AddTaskComponent } from './features/todo/components/add-task/add-task.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
//import { MatLabelModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent,
    AddListComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutes,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    //MatLabelModule,
    MatButtonModule,CommonModule,RouterModule.forRoot(routes),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
