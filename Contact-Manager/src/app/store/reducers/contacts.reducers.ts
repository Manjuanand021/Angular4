import { Contact } from "../../features/models/contact.model";
import * as fromActions from "../actions";

export interface ContactsState {
  entities: { [id: number]: Contact };
  loaded: boolean;
  loading: boolean;
}

const initialState: ContactsState = {
  entities: {
    3736060260: {
      id: 3736060260,
      name: "Cassio Zen",
      email: "cassiozen@gmail.com",
      phone: "+1(879) 527-5735",
      city: "Agidaed",
      street: "807 Jefe Trail",
      avatar: "",
      zipCode: "34154",
      country: "Palestinian Territories",
      hobbies: [3, 10, 4, 9, 3]
    }
  },
  loaded: false,
  loading: false
};

export function contactsReducers(
  state = initialState,
  action: fromActions.ContactsActions
): ContactsState {
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
