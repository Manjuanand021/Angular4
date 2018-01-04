import { createSelector } from "@ngrx/store";
import * as fromReducers from "../reducers";

const getContactsEntities = createSelector(
  fromReducers.getContactsState,
  (state: fromReducers.ContactsState) => state.entities
);

export const getAllContacts = createSelector(getContactsEntities, entities => {
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});

export const getContactsLoading = createSelector(
  fromReducers.getContactsState,
  (state: fromReducers.ContactsState) => state.loading
);

export const getContactsLoaded = createSelector(
  fromReducers.getContactsState,
  (state: fromReducers.ContactsState) => state.loaded
);
