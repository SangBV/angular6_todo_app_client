import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from '../../../../node_modules/rxjs';
import { TaskViewModel } from '../../Models/task.model';

const API_BASE_URL = environment.API_BASE_URL;
const API_GET_TASKS = environment.API_GET_TASKS;

@Injectable()
export class TaskService {

    constructor(private http: HttpClient) {
    }

    getAllTask(): Observable<TaskViewModel[]> {
        return this.http.get<TaskViewModel[]>(API_BASE_URL + API_GET_TASKS)
            .catch(this.handleError);
    }
    getDetailTask(id: string): Observable<TaskViewModel>{
        return this.http.get<TaskViewModel>(API_BASE_URL + API_GET_TASKS + '/' + id)
            .catch(this.handleError);
    }
    private handleError(error: Response | any) {
        console.error('ApiService::handleError', error);
        return Observable.throw(error);
    }
}