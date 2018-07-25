import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '../../../../../node_modules/@angular/router';
import { TaskService } from '../../../core/services/task.service';
import { TaskViewModel } from '../../../Models/task.model';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  taskDetail : TaskViewModel;
  taskId: string;
  
  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
  ) { 
    let sub = this.route.params.subscribe((params: Params) => {
      this.taskId = params['id'];
    })
  }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    this.taskService.getDetailTask(this.taskId)
      .subscribe(task => this.taskDetail = task);
  }
}
