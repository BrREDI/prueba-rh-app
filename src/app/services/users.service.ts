import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User,CreateUserDTO } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = 'http://localhost:8000/api/register';

  constructor(
    private http: HttpClient
  ) { }

  create(user:User){
    return this.http.post<User>(this.apiUrl,user);
  }

  getAll(){
    return this.http.get<User[]>(this.apiUrl);
  }

}
