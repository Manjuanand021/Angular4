import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { SearchInputComponent } from "./search-input";
import { ButtonComponent } from "./button";
import { AvatarComponent } from "./avatar";
import { NavItemComponent } from "./nav-item";
import { DisplayItemComponent } from "./display-item/display-item.component";

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  declarations: [
    SearchInputComponent,
    ButtonComponent,
    AvatarComponent,
    NavItemComponent,
    DisplayItemComponent
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SearchInputComponent,
    ButtonComponent,
    AvatarComponent,
    NavItemComponent,
    DisplayItemComponent
  ]
})
export class SharedModule {}
