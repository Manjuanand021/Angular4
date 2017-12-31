import { NgModule } from "@angular/core";

// components
import { SharedModule, SearchInputComponent } from "../shared";
import {
  contactComponents,
  ContactListComponent,
  ContactDisplayComponent
} from "./contacts";
import { HeaderBarComponent } from "./header-bar";

// services
import { services } from "./services";

@NgModule({
  imports: [SharedModule],
  exports: [HeaderBarComponent, ContactListComponent],
  declarations: [HeaderBarComponent, ...contactComponents],
  providers: [...services]
})
export class FeaturesModule {}
