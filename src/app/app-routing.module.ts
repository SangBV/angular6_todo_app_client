import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTaskComponent } from './components/task/list-task/list-task.component';
import { TaskDetailComponent } from './components/task/task-detail/task-detail.component';

const routes: Routes = [
  { path: 'tasks', component: ListTaskComponent },
  { path: 'tasks/:id', component: TaskDetailComponent},
  { path: '', redirectTo: '/tasks', pathMatch: 'full' }
];

@NgModule({
  exports: [RouterModule], 
  imports: [ RouterModule.forRoot(routes) ],
})

export class AppRoutingModule { }
