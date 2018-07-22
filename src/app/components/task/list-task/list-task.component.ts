import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { TaskService } from '../../../core/services/task.service';
import { TaskViewModel } from '../../../Models/task.model';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  listTask : TaskViewModel[];
  
  constructor(public http: HttpClient,
    private taskService: TaskService
  ) { }

  ngOnInit() {
    this.getAllTask();
  }
  
  getAllTask(): void{
    this.taskService.getAllTask().subscribe(
      dataResponse => {
        this.listTask = dataResponse;
      }
    );
  }
}
