import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { NgModule } from "@angular/core";

// components
import { AppComponent } from "./root/app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
