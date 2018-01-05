import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { NgModule } from "@angular/core";
import { StoreModule, MetaReducer, ActionReducer } from "@ngrx/store";

// modules
import { AppRoutingModule } from "./app.routing";
import { FeaturesModule } from "./features/features.module";

// components
import { AppComponent } from "./root/app.component";

// not used in production
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { storeFreeze } from "ngrx-store-freeze";
import { storeLogger } from "ngrx-store-logger";

// store
import * as fromStore from "./store";

// register ngrx-store-logger
export function logger(reducer: ActionReducer<fromStore.AppState>): any {
  // default, no options
  return storeLogger()(reducer);
}

// metareducer
export const metaReducers: MetaReducer<any>[] = environment.production
  ? []
  : [storeFreeze];

// environment
import { environment } from "../environments/environment";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FeaturesModule,
    StoreModule.forRoot(fromStore.reducers, { metaReducers }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
