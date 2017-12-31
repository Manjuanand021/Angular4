import { ContactDisplayComponent } from "./contact-display";
import { ContactTileComponent } from "./contact-tile";
import { ContactListComponent } from "./contacts-list";

export const contactComponents: any[] = [
  ContactDisplayComponent,
  ContactTileComponent,
  ContactListComponent
];

export * from "./contact-display/contact-display.component";
export * from "./contact-tile/contact-tile.component";
export * from "./contacts-list/contacts-list.component";
