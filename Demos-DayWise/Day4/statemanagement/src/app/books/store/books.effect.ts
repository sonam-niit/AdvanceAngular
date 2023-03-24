import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { EMPTY, mergeMap, withLatestFrom,map, switchMap } from "rxjs";
import { setAPIStatus } from "src/app/shared/store/app.action";
import { Appstate } from "src/app/shared/store/appstate";
import { BooksService } from "../books.service";
import { booksFetchAPISuccess, invokeBooksAPI, invokeSaveNewBookApi, saveNewBookAPISuccess } from "./books.action";
import { selectBooks } from "./books.selector";

@Injectable()
export class BooksEffect {

    constructor(
        private action$:Actions,
        private service:BooksService,
        private store:Store,
        private appStore:Store<Appstate>
    ){}

    saveNewBooks$=createEffect(()=>{
        return this.action$.pipe(
            ofType(invokeSaveNewBookApi),
            switchMap((action)=>{
                this.appStore.dispatch(
                    setAPIStatus({apiStatus:{apiResponseMessage:'',apiStatus:''}})
                );
                return this.service.create(action.newBook).pipe(
                    map((data)=>{
                        this.appStore.dispatch(
                            setAPIStatus({
                                apiStatus:{apiResponseMessage:'',apiStatus:'success'}
                            })
                        )
                        return saveNewBookAPISuccess({newBook:data})
                    })
                );
                
            })
        )
    })
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
