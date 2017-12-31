import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

import { ContactsState } from "../store/reducers/contacts.reducers";

@Component({
  selector: "app-root",
  templateUrl: "./app.template.html",
  styles: []
})
export class AppComponent implements OnInit {
  title = "Contact Manager";
  constructor() {}

  ngOnInit() {}
}
