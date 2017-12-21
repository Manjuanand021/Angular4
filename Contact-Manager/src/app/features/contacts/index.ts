import { ContactDisplayComponent } from "./contact-display/contact-display.component";
import { ContactTileComponent } from "./contact-tile/contact-tile.component";
import { ContactListComponent } from "./contacts-list/contacts-list.component";

export const contactComponents: any[] = [
  ContactDisplayComponent,
  ContactTileComponent,
  ContactListComponent
];

export * from "./contact-display/contact-display.component";
export * from "./contact-tile/contact-tile.component";
export * from "./contacts-list/contacts-list.component";
