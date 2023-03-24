import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Books } from './store/books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  get(){
    return this.http.get<Books[]>("http://localhost:3000/books");
  }
  create(payload:Books){
    return this.http.post("http://localhost:3000/books",payload);
  }
}
