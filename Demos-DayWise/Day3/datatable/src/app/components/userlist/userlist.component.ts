import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {

  users!:User[];
  displayedColumns:string[]=['id','name','email','username'];
  constructor(private service:UserService){}
  ngOnInit(){
    this.service.getAllUsers().subscribe(ob=>this.users=ob);
  }
}
