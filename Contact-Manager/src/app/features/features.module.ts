import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// components
import { contactComponents } from "./contacts";

// services
import { services } from "./services";

@NgModule({
  imports: [CommonModule],
  exports: [...contactComponents],
  declarations: [...contactComponents],
  providers: [...services]
})
export class FeaturesModule {}
