import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Userclass } from '../models/userclass';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentuser={}
  endpoint:string="http://localhost:4000/api";
  headers= new HttpHeaders().set('Content-Type','application/json');

  constructor(private http:HttpClient,private router:Router) { }
  //signin
  signIn(user:Userclass){
    return this.http.post(`${this.endpoint}/signin`,user)
    .subscribe((res:any)=>{
      localStorage.setItem('access_token',res.token);
      this.getUserProfile(res._id).subscribe((res)=>{
        this.currentuser=res;
        this.router.navigate(['userprofile/'+res._id])
      })
    })
  }
  getToken(){
    return localStorage.getItem('access_token');
  }
  getIsLoggedIn():boolean{
    let token=localStorage.getItem('access_token');
    return token!==null?true :false;
  }
  doLogOut(){
    let token=localStorage.removeItem('access_token');
    if(token==null){
      this.router.navigate(['login'])
    }
  }
  //get UserProfile
  getUserProfile(id:any):Observable<Userclass>{
    return this.http.get<Userclass>(`${this.endpoint}/user-profile/${id}`)
  }
}
