import {
  Component,
  OnInit,
  OnChanges,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";

import { Contact } from "../../models";

@Component({
  selector: "cm-contact-display",
  templateUrl: "./contact-display.template.html"
})
export class ContactDisplayComponent implements OnInit, OnChanges {
  @Input() contact: Contact;
  @Output() onContactSave = new EventEmitter();
  isEditing: boolean;
  contactForm: FormGroup;

  constructor(private _fb: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this._fb.group({
      name: this._fb.control("", Validators.required),
      phone: this._fb.control("", Validators.required),
      email: this._fb.control("", Validators.required),
      city: this._fb.control("", Validators.required),
      street: this._fb.control("", Validators.required),
      zipCode: this._fb.control("", Validators.required),
      country: this._fb.control("", Validators.required)
    });
  }

  ngOnChanges() {
    //set form control values
    if (!!this.contact) {
      this.contactForm.setValue({
        name: this.contact.name,
        phone: this.contact.phone,
        email: this.contact.email,
        city: this.contact.city,
        street: this.contact.street,
        zipCode: this.contact.zipCode,
        country: this.contact.country
      });
    }
  }

  onEdit() {
    this.isEditing = !this.isEditing;
    if (!this.isEditing) {
      this.onContactSave.emit({
        id: this.contact.id,
        contact: this.contactForm.value
      });
    }
  }
}
