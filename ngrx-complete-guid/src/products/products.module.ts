import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

// components
import * as fromComponents from "./components";

// containers
import * as fromContainers from "./containers";

// services
import * as fromServices from "./services";

// guards
import * as fromGuards from "./guards";

//store
import { reducers, effects } from "./store";

// routes
export const ROUTES: Routes = [
  {
    path: "",
    canActivate: [fromGuards.PizzaGuard],
    component: fromContainers.ProductsComponent
  },
  {
    path: "new",
    canActivate: [fromGuards.PizzaGuard],
    component: fromContainers.ProductItemComponent
  },
  {
    path: ":pizzaId",
    canActivate: [fromGuards.PizzaExistsGuard],
    component: fromContainers.ProductItemComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature("products", reducers),
    EffectsModule.forFeature(effects)
  ],
  providers: [...fromServices.services, ...fromGuards.guards],
  declarations: [...fromContainers.containers, ...fromComponents.components],
  exports: [...fromContainers.containers, ...fromComponents.components]
})
export class ProductsModule {}