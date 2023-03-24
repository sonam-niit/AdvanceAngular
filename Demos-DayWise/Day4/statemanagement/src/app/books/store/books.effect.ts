import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { EMPTY, mergeMap, withLatestFrom,map } from "rxjs";
import { BooksService } from "../books.service";
import { booksFetchAPISuccess, invokeBooksAPI } from "./books.action";
import { selectBooks } from "./books.selector";

@Injectable()
export class BooksEffect {

    constructor(
        private action$:Actions,
        private service:BooksService,
        private store:Store
    ){}

    loadAllBooks$= createEffect(()=>
        this.action$.pipe(
            ofType(invokeBooksAPI),
            withLatestFrom(this.store.pipe(select(selectBooks))),
            mergeMap(([,bookfromStore])=>{
                if(bookfromStore.length>0){
                    return EMPTY;
                }
                return this.service.get()
                .pipe(map((data)=>booksFetchAPISuccess({allBooks:data})))
            }))
        )
    
}
