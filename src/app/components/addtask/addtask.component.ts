import { Component } from '@angular/core';
import { Task } from 'src/app/models/task.models';
import { TaskServiceService } from 'src/app/services/task-service.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent {

newTask: Task = {
  id: 0,
  title: '',
  description: '',
  status:'',
  create_at: new Date(),
  update_at: new Date()
}

constructor(private taskService : TaskServiceService){}

onSaveTask(){
  this.taskService.saveTask(this.newTask).subscribe(savedTask => { console.log('task saved', savedTask);});
}

}
