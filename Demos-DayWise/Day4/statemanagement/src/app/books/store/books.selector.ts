import { createFeatureSelector } from "@ngrx/store";
import { Books } from "./books";

export const selectBooks=
createFeatureSelector<Books[]>('mybooks');

//selector created to fetch th data from feature module
//this mybooks selector must be register the reduce to get the data