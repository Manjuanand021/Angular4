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
import { CalendarComponent } from "./calendar/calendar.component";
import { PhoneComponent } from "./phone/phone.component";
import { PerformanceComponent } from "./performance/performance.component";
import { SettingsComponent } from "./settings/settings.component";
import { MailComponent } from "./mail/mail.component";

// services
import { services } from "./services";

//store related
import { reducers, effects } from "./store";
import { NotFoundComponent } from "./not-found/not-found.component";

@NgModule({
  imports: [
    SharedModule,
    StoreModule.forFeature("contacts", reducers),
    EffectsModule.forFeature(effects)
  ],
  exports: [
    HeaderBarComponent,
    ContactListComponent,
    NavBarComponent,
    CalendarComponent,
    PhoneComponent,
    PerformanceComponent,
    SettingsComponent,
    MailComponent,
    NotFoundComponent
  ],
  declarations: [
    HeaderBarComponent,
    NavBarComponent,
    ...contactComponents,
    CalendarComponent,
    PhoneComponent,
    PerformanceComponent,
    SettingsComponent,
    MailComponent,
    NotFoundComponent
  ],
  providers: [...services]
})
export class FeaturesModule {}
