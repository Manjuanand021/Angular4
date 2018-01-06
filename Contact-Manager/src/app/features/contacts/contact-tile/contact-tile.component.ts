import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from "@angular/core";
import { Contact } from "../../models/contact.model";

@Component({
  selector: "cm-contact-tile",
  templateUrl: "./contact-tile.template.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactTileComponent implements OnInit {
  @Input() contact: Contact;
  @Output() onContactClick = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  onContactSelect(contactId: number) {
    this.onContactClick.emit(contactId);
  }
  trackByContactId(index, contact: Contact) {
    return contact.id;
  }
}
