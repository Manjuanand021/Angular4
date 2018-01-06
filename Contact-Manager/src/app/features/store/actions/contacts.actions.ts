import { Action } from "@ngrx/store";
import { Contact } from "../../models/contact.model";

// export enum ContactsActionTypes {
//   LOAD_CONTACTS = "[CONTACTS] Load Contacts",
//   LOAD_CONTACTS_SUCCESS = "[CONTACTS] Load Contacts success",
//   LOAD_CONTACTS_FAIL = "[CONTACTS] Load Contacts fail"
// }
export const LOAD_CONTACTS = "[CONTACTS] Load Contacts";
export const LOAD_CONTACTS_SUCCESS = "[CONTACTS] Load Contacts success";
export const LOAD_CONTACTS_FAIL = "[CONTACTS] Load Contacts fail";

export const UPDATE_CONTACT = "[CONTACTS] Update Contact";
export const UPDATE_CONTACT_SUCCESS = "[CONTACTS] Update Contact success";
export const UPDATE_CONTACT_FAIL = "[CONTACTS] Update Contact fail";

export class LoadContacts implements Action {
  readonly type = LOAD_CONTACTS;
}
export class LoadContactssuccess implements Action {
  readonly type = LOAD_CONTACTS_SUCCESS;
  constructor(public payLoad: Contact[]) {}
}
export class LoadContactsFail implements Action {
  readonly type = LOAD_CONTACTS_FAIL;
}

export class UpdateContact implements Action {
  readonly type = UPDATE_CONTACT;
  constructor(public payLoad: Contact) {}
}
export class UpdateContactSuccess implements Action {
  readonly type = UPDATE_CONTACT_SUCCESS;
}
export class UpdateContactFail implements Action {
  readonly type = UPDATE_CONTACT_FAIL;
}

export type ContactsActions =
  | LoadContacts
  | LoadContactssuccess
  | LoadContactsFail
  | UpdateContact
  | UpdateContactSuccess
  | UpdateContactFail;
