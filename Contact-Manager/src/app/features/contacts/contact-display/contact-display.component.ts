import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Contact } from "../../models";

@Component({
  selector: "cm-contact-display",
  templateUrl: "./contact-display.template.html"
})
export class ContactDisplayComponent implements OnInit {
  @Input() contact: Contact;
  @Output() onContactUpdate = new EventEmitter();
  isEditing: boolean;
  constructor() {}
  ngOnInit() {}
  onEdit() {
    this.isEditing = !this.isEditing;
    if (!this.isEditing) {
      this.onContactUpdate.emit();
    }
  }
}
