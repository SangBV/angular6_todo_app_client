import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { TaskService } from '../../../core/services/task.service';
import { TaskViewModel } from '../../../Models/task.model';
import { MatTableDataSource, MatSort } from '../../../../../node_modules/@angular/material';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})

export class ListTaskComponent implements OnInit {
  listTask: TaskViewModel[];

  @ViewChild(MatSort) sort: MatSort;

  constructor(public http: HttpClient,
    private taskService: TaskService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllTask();
  }

  getAllTask(): void {
    this.taskService.getAllTask().subscribe(
      dataResponse => {
        this.listTask = dataResponse;
      }
    );
  }

  onEditClicked(taskId: string) {
    this.router.navigate(["/tasks", taskId])
  }
}
