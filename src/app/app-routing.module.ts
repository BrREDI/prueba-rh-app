import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtaskComponent } from './components/addtask/addtask.component';
import { LoginComponent } from './components/login/login.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { SignupComponent} from './components/signup/signup.component';
import { UpdatetaskComponent } from './components/updatetask/updatetask.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'tasks', component: TasksComponent},
  {path: 'addtask', component:AddtaskComponent},
  {path: 'register', component: SignupComponent},
  {path: 'updatetask', component:UpdatetaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
