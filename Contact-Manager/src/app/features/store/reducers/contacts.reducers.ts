import { Contact } from "../../models/contact.model";
import * as fromActions from "../actions";
import { ClassStmt } from "@angular/compiler/src/output/output_ast";

export interface ContactsState {
  entities: { [id: number]: Contact };
  loaded: boolean;
  loading: boolean;
  updating: boolean;
  updated: boolean;
}

const initialState: ContactsState = {
  entities: {},
  loaded: false,
  loading: false,
  updating: false,
  updated: false
};

export function reducers(
  state = initialState,
  action: fromActions.ContactsActions
) {
  switch (action.type) {
    case fromActions.LOAD_CONTACTS: {
      return { ...state, loaded: false, loading: true };
    }
    case fromActions.LOAD_CONTACTS_SUCCESS: {
      const contacts = action.payLoad;
      const entities = contacts.reduce(
        (entities: { [id: number]: Contact }, contact) => {
          return {
            ...entities,
            [contact.id]: contact
          };
        },
        {
          ...state.entities
        }
      );
      return { ...state, entities, loaded: false, loading: true };
    }
    case fromActions.LOAD_CONTACTS_FAIL: {
      return { ...state, loaded: false, loading: false };
    }
    case fromActions.UPDATE_CONTACT: {
      return {
        ...state.entities,
        [action.payLoad.id]: action.payLoad,
        updated: false,
        updating: false
      };
    }
    case fromActions.UPDATE_CONTACT_SUCCESS: {
      return { ...state, updating: true };
    }
    case fromActions.UPDATE_CONTACT_FAIL: {
      return { ...state, updated: true };
    }
    default:
      return state;
  }
}
