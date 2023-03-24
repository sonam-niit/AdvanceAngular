import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { selectAppState } from 'src/app/shared/store/app.selector';
import { Appstate } from 'src/app/shared/store/appstate';
import { Books } from '../store/books';
import { invokeSaveNewBookApi } from '../store/books.action';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  constructor(
    private store:Store,
    private appStore:Store<Appstate>,
    private router:Router
  ){}
  bookForm:Books={id:0,author:'',name:'',cost:0}

  save(){
    this.store.dispatch(invokeSaveNewBookApi({newBook: this.bookForm}));
    let apiStatus$= this.appStore.pipe(select(selectAppState))
    apiStatus$.subscribe((apstate)=>{
      if(apstate.apiStatus='success'){
        this.appStore.dispatch({apiStatus:{apiResponseMessage:'',apiStatus:''}});
      }
      this.router.navigate(['/']);
    })
  }
}
