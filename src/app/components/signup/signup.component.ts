import { Component, OnInit, Input } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  newUser: User = {
    id:'0',
    email:'',
    password: '',
    name: ''
  }


  constructor(
    private userService: UsersService,
    private router:Router
  ){}

  createUser(){
    this.userService.create(this.newUser)
    .subscribe(response => {
      console.log(response);
      this.router.navigate(['']);
    });
  }

}

