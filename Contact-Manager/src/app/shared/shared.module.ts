import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SearchInputComponent } from "./search-input";
import { ButtonComponent } from "./button";
import { AvatarComponent } from "./avatar";
import { NavItemComponent } from "./nav-item";

@NgModule({
  imports: [CommonModule],
  declarations: [
    SearchInputComponent,
    ButtonComponent,
    AvatarComponent,
    NavItemComponent
  ],
  exports: [
    CommonModule,
    SearchInputComponent,
    ButtonComponent,
    AvatarComponent,
    NavItemComponent
  ]
})
export class SharedModule {}
