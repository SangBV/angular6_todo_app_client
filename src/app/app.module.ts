import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskService } from './core/services/task.service';
import { ListTaskComponent } from './components/task/list-task/list-task.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskDetailComponent } from './components/task/task-detail/task-detail.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ListTaskComponent,
    TaskDetailComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  entryComponents: [
    TaskDetailComponent
  ],
  providers: [
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
