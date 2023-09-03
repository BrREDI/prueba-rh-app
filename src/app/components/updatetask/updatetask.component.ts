import { Component } from '@angular/core';
import { Task } from 'src/app/models/task.models';
import { TaskServiceService } from 'src/app/services/task-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatetask',
  templateUrl: './updatetask.component.html',
  styleUrls: ['./updatetask.component.css']
})
export class UpdatetaskComponent {

  newTask: Task = {
    id: 0,
    title: '',
    description: '',
    status:'',
    create_at: new Date(),
    update_at: new Date()
  }

  constructor(
    private taskService:TaskServiceService,
    private router: Router
  ){}

  onUpdateTask(){
    this.taskService.updateTask(this.newTask).subscribe(response => {console.log(response);});
  }

  backToTasks(){
    this.router.navigate(['tasks']);
  }

}
