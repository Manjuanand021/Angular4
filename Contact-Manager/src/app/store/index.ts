import { ActionReducerMap } from "@ngrx/store";
import * as fromContactReducer from "../features/store";

export interface AppState {
  contacts: fromContactReducer.ContactsState;
}

export const reducers: ActionReducerMap<any> = {
  contacts: fromContactReducer.reducers
};
