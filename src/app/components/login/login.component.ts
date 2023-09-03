import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  //token = '';
  email: string = '';
  password: string = '';
  profile :User | null = null;

  constructor(
    private authService: AuthService,
    private userService: UsersService,
    private router: Router
  ){}

  login(){
     this.authService.login(this.email,this.password).subscribe(
       rta=>{
         if(this.authService.getToken()){
        this.router.navigate(['tasks']);
         }
       });
  }

  crearUsuario(){
    this.router.navigate(['register']);
  }

}
