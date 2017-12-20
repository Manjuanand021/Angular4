import { NgModule } from "@angular/core";

// services
import { services } from "./services";

@NgModule({
  imports: [],
  exports: [],
  providers: [...services]
})
export class FeaturesModule {}
