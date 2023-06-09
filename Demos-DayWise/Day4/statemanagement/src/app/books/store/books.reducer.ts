import { createReducer, on } from "@ngrx/store";
import { Books } from "./books";
import { booksFetchAPISuccess, saveNewBookAPISuccess } from "./books.action";

//empty array assigned for initial data store
export const initialState: ReadonlyArray<Books>=[];

//create reducer by sending initial value as input
export const BooksReducer= createReducer(initialState,
    on(booksFetchAPISuccess,(state,{allBooks})=>{
        return allBooks;
    }),

    on(saveNewBookAPISuccess,(state,{newBook})=>{
        let newState=[...state];
        newState.unshift(newBook);
        return newState;
    }),
    );

