import { Component } from '@angular/core';
import { TaskServiceService } from 'src/app/services/task-service.service';
import { Task } from 'src/app/models/task.models';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  responsedata : any

  constructor(
    private taskService: TaskServiceService
  ){}

  ngOnInit():void{
    this.taskService.getTasks()
    .subscribe(response => {
      this.responsedata = response.tasks;
      console.log(this.responsedata);
    });

  }

}
