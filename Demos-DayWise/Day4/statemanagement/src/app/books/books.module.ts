import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store'

import { BooksRoutingModule } from './books-routing.module';
import { HomeComponent } from './home/home.component';
import { BooksReducer } from './store/books.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BooksEffect } from './store/books.effect';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    AddComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    BooksRoutingModule,
    StoreModule.forFeature('mybooks',BooksReducer),
    EffectsModule.forFeature([BooksEffect])
  ],
  exports:[
    BooksRoutingModule,
  ]
})
export class BooksModule { }
