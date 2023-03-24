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