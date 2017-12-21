import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";

import * as fromStore from "../../../store";
import { Contact } from "../../models/contact.model";

@Component({
  selector: "cm-contact-lits",
  templateUrl: "./contacts-list.template.html"
})
export class ContactListComponent implements OnInit {
  contacts: Observable<Contact[]>;

  constructor(private _store: Store<fromStore.AppState>) {}

  ngOnInit() {
    this._store.select<Contact[]>(fromStore.getAllContacts).subscribe(data => {
      console.log("contact state", data);
    });
  }
}
