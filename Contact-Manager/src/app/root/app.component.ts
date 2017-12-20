import { Component, OnInit } from "@angular/core";
import { ContactsService } from "../services/contacts.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.template.html",
  styles: []
})
export class AppComponent implements OnInit {
  title = "Contact Manager";

  constructor(private contactsService: ContactsService) {}

  ngOnInit() {
    this.contactsService.getAllContacts().subscribe(data => {
      console.log("data", data);
    });
  }
}
