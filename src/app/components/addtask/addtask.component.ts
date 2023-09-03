import { Component } from '@angular/core';
import { Task } from 'src/app/models/task.models';
import { TaskServiceService } from 'src/app/services/task-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent {

  message: string = '';
newTask: Task = {
  id: 0,
  title: '',
  description: '',
  status:'',
  create_at: new Date(),
  update_at: new Date()
}

constructor(
  private taskService : TaskServiceService,
  private router: Router
  ){}

onSaveTask(){
  this.taskService.saveTask(this.newTask).subscribe(savedTask => {
    console.log('task saved', savedTask);
    this.message = 'Tarea guardada';
  });
}

backToTasks(){
  this.router.navigate(['tasks']);
}

}
