import { Contact } from "../../models/contact.model";
import * as fromActions from "../actions";

export interface ContactsState {
  entities: { [id: number]: Contact };
  loaded: boolean;
  loading: boolean;
}

const initialState: ContactsState = {
  entities: {},
  loaded: false,
  loading: false
};

export function reducers(
  state = initialState,
  action: fromActions.ContactsActions
) {
  switch (action.type) {
    case fromActions.LOAD_CONTACTS: {
      return {
        ...state,
        loaded: false,
        loading: true
      };
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
      return {
        ...state,
        entities,
        loaded: false,
        loading: true
      };
    }
    case fromActions.LOAD_CONTACTS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }
    default:
      return state;
  }
}
