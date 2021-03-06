import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  uri="http:localhost:3000/isloggedin";
  status: { code: any; };

  constructor(private http:HttpClient) { }
    data:any;

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }

  isAuth() {
    try {
      if (localStorage.getItem('token')) {
        return true;
      }
      else {
        return false;
      }
    }
    catch (err) {
      return false;
    }
  }

}