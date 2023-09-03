import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Auth } from '../models/auth.model';
import { User } from '../models/user.model';
import { TokenService } from './token.service';
import { tap } from 'rxjs';
import { switchMap} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8000/api';

  constructor(
    private http:HttpClient,
    private tokenService: TokenService
  ) { }

  login(email: string, password:string){
    return this.http.post<Auth>(`${this.apiUrl}/login`, {email, password})
    .pipe(
      tap(response => this.tokenService.saveToken(response.access_token))
    );
  }

  profile(){
    // const headers = new HttpHeaders();
    // headers.set('Authorization', `Bearer ${token}`);
     return this.http.get<User>(`${this.apiUrl}/profile`,{
      //  headers: {
      //    Authorization: `Bearer ${token}`
        // 'Content-type' : 'application/json'
       //}
     });
  }

  getToken(){
    return this.tokenService.isLoggedIn();
  }

}
