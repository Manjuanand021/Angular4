import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";

import * as fromStore from "../../../store";
import * as fromContactStore from "../../store";
import { Contact } from "../../models/contact.model";

@Component({
  selector: "cm-contact-lits",
  templateUrl: "./contacts-list.template.html"
})
export class ContactListComponent implements OnInit {
  contacts$: Observable<Contact[]>;
  selectedContact$: Observable<Contact>;
  constructor(private _store: Store<fromStore.AppState>) {}

  ngOnInit() {
    this.contacts$ = this._store.select<Contact[]>(
      fromContactStore.getAllContacts
    );
    this._store.dispatch(new fromContactStore.LoadContacts());
  }
  onContactRowClick(contactId: number) {
    this.selectedContact$ = this._store.select<Contact>(
      fromContactStore.getSelectedContact(contactId)
    );
  }

  updateContact(value: { id: number; contact: Contact }) {
    value.contact.id = value.id;
    this._store.dispatch(new fromContactStore.UpdateContact(value.contact));
  }
}
