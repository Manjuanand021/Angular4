import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";

import * as fromPizzaReducers from "./pizzas.reducers";
import * as fromToppingReducers from "./toppings.reducers";

// export interface ProductsState {
//   pizzas: fromPizzaReducers.PizzasState;
//   toppings: fromToppingReducers.ToppingsState;
// }
export interface ProductsState {
  pizzas: fromPizzaReducers.PizzasState;
}

export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizzaReducers.reducers
};

export const getProductState = createFeatureSelector("products");
