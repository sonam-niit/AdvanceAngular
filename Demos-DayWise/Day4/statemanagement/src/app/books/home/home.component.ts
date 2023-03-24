import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { invokeBooksAPI } from '../store/books.action';
import { selectBooks } from '../store/books.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private store:Store){}
  books$= this.store.pipe(select(selectBooks));
  ngOnInit(){
    this.store.dispatch(invokeBooksAPI());
    //invoke ngrx effect which will call api from service
  }
}
