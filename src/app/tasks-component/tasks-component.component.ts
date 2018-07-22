import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { TaskViewModel } from '../Models/task.model';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-tasks-component',
  templateUrl: './tasks-component.component.html',
  styleUrls: ['./tasks-component.component.css']
})
export class TasksComponentComponent implements OnInit {
  baseUrl = "http://localhost:28641";
  listTask : TaskViewModel[];
  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.getAllTask();
  }
  
  getAllTask(){
   this.http.get(this.baseUrl + '/api/tasks')
    .subscribe((data: TaskViewModel[]) => {
      console.log("Data Response");
      console.log(data);
      this.listTask = data;
    });
  }
}
