import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  private apiUrl = 'http://localhost:8000/api/task/';

  constructor(
    private http:HttpClient
  ) { }

  getTasks():Observable<any>{
     return this.http.get<any>(this.apiUrl);
  }

  saveTask(task: Task){
    return this.http.post<Task>(this.apiUrl,task);
  }

  updateTask(task:Task):Observable<Task>{
    return this.http.put<Task>(this.apiUrl.concat(task.id.toString()),task);
  }

  deleteTask(id:number){
    return this.http.delete(this.apiUrl.concat(id.toString()));
  }

}

