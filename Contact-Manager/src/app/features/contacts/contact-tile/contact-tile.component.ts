import {
  Component,
  OnInit,
  Input,
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

  constructor() {}

  ngOnInit() {}
}
