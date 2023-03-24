import { createAction, props } from "@ngrx/store";
import { Books } from "./books";

//action invoke the API
export const invokeBooksAPI= createAction(
    '[Books API] Invoke Books Fetch API'
);
//action invoke after successfull API Call
export const booksFetchAPISuccess= createAction(
    '[Books API] Fetch API Success',
    props<{allBooks:Books[]}>()
)
export const invokeSaveNewBookApi=createAction(
    '[Books API] Invoke save new book API',
    props<{newBook:Books}>()
)
export const saveNewBookAPISuccess=createAction(
    '[Books API] save new api success',
    props<{newBook:Books}>()
)