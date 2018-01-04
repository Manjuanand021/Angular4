import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

// components
import { SharedModule, SearchInputComponent } from "../shared";
import {
  contactComponents,
  ContactListComponent,
  ContactDisplayComponent
} from "./contacts";
import { HeaderBarComponent } from "./header-bar";
import { NavBarComponent } from "./nav-bar";

// services
import { services } from "./services";

//store related
import { reducers, effects } from "./store";

@NgModule({
  imports: [
    SharedModule,
    StoreModule.forFeature("contacts", reducers),
    EffectsModule.forFeature(effects)
  ],
  exports: [HeaderBarComponent, ContactListComponent, NavBarComponent],
  declarations: [HeaderBarComponent, NavBarComponent, ...contactComponents],
  providers: [...services]
})
export class FeaturesModule {}
