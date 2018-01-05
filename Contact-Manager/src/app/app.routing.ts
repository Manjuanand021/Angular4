import { NgModule } from "@angular/core";
import { Routes, RouterModule, CanActivate } from "@angular/router";

import { ContactListComponent } from "./features/contacts/";
import { CalendarComponent } from "./features/calendar/calendar.component";
import { PhoneComponent } from "./features/phone/phone.component";
import { PerformanceComponent } from "./features/performance/performance.component";
import { MailComponent } from "./features/mail/mail.component";
import { SettingsComponent } from "./features/settings/settings.component";
import { NotFoundComponent } from "./features/not-found/not-found.component";

const routes: Routes = [
  {
    path: "calendar",
    component: CalendarComponent,
    pathMatch: "full"
  },
  {
    path: "contacts",
    component: ContactListComponent,
    pathMatch: "full"
  },
  {
    path: "phone",
    component: PhoneComponent,
    pathMatch: "full"
  },
  {
    path: "performance",
    component: PerformanceComponent,
    pathMatch: "full"
  },
  {
    path: "mail",
    component: MailComponent,
    pathMatch: "full"
  },
  {
    path: "settings",
    component: SettingsComponent,
    pathMatch: "full"
  },
  {
    path: "not-found",
    component: NotFoundComponent,
    pathMatch: "full"
  },
  {
    path: "",
    redirectTo: "/contacts",
    pathMatch: "full"
  },
  // Catch all route
  {
    path: "**",
    redirectTo: "/not-found"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
