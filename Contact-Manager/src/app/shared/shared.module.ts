import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SearchInputComponent } from "./search-input";
import { ButtonComponent } from "./button";
import { AvatarComponent } from "./avatar";

@NgModule({
  imports: [CommonModule],
  declarations: [SearchInputComponent, ButtonComponent, AvatarComponent],
  exports: [
    CommonModule,
    SearchInputComponent,
    ButtonComponent,
    AvatarComponent
  ]
})
export class SharedModule {}
