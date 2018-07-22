import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TaskService } from './core/services/task.service';
import { ListTaskComponent } from './components/task/list-task/list-task.component';

@NgModule({
  declarations: [
    AppComponent,
    ListTaskComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
