import { EffectsModule } from '@ngrx/effects';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module'
import { CoreModule } from './core/core.module';

import { StoreModule } from '@ngrx/store';
import { ShppingListReducer } from './store/shopping-list.reducers';
import ShipppingListEffects from './store/shipping-list.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    ShoppingListModule,
    AuthModule,
    CoreModule,
    StoreModule.forRoot({
      shoppingList: ShppingListReducer
    }),
    EffectsModule.forRoot([ShipppingListEffects])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
