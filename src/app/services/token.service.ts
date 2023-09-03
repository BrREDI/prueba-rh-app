import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  saveToken(token: string){
    localStorage.setItem('token',token);
  }

  getToken(){
    const token = localStorage.getItem('token');
    return token;
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null
  }

  logout(){
    localStorage.removeItem('token');
  }

}
