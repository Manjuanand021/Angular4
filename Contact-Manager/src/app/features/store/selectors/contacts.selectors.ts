import { createSelector } from "@ngrx/store";
import * as fromReducers from "../reducers";
import { Contact } from "../../models/index";

const getContactsEntities = createSelector(
  fromReducers.getContactsState,
  (state: fromReducers.ContactsState) => {
    console.log("lo", state.entities);
    return state.entities;
  }
);

export const getAllContacts = createSelector(getContactsEntities, entities => {
  console.log("entities", entities);
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});

export const getSelectedContact = id => {
  return createSelector(getContactsEntities, entities => {
    return entities[id];
  });
};
// export const getSelectedContact = createSelector(selecotrEntity());

export const getContactsLoading = createSelector(
  fromReducers.getContactsState,
  (state: fromReducers.ContactsState) => state.loading
);

export const getContactsLoaded = createSelector(
  fromReducers.getContactsState,
  (state: fromReducers.ContactsState) => state.loaded
);
