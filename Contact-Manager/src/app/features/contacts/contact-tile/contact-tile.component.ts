import { Component, OnInit, Input } from "@angular/core";
import { Contact } from "../../models/contact.model";

@Component({
  selector: "cm-contact-tile",
  templateUrl: "./contact-tile.template.html"
})
export class ContactTileComponent implements OnInit {
  @Input() contact: Contact;

  constructor() {}

  ngOnInit() {}
}
