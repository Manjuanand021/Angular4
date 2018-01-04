import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";
import * as fromReducers from "./contacts.reducers";

// Create the default selectors
export const getContactsState = createFeatureSelector<
  fromReducers.ContactsState
>("contacts");

export * from "./contacts.reducers";
