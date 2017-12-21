import { ActionReducerMap, createSelector } from "@ngrx/store";
import * as fromReducers from "./contacts.reducers";

export interface AppState {
  contacts: fromReducers.ContactsState;
}

export const reducers: ActionReducerMap<AppState> = {
  contacts: fromReducers.contactsReducers
};

export const getContactsState = (state: AppState) => state.contacts;

export * from "./contacts.reducers";
