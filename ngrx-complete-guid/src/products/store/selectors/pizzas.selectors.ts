import { createSelector } from "@ngrx/store";
import * as fromPizzaReducers from "../reducers/pizzas.reducers";
import { ProductsState, getProductState } from "../reducers";
import { getRouterstate } from "../../../app/store/reducers";
import { Pizza } from "../../models/pizza.model";

export const getPizzasState = createSelector(
  getProductState,
  (state: ProductsState) => state.pizzas
);
export const getPizzasEntities = createSelector(
  getPizzasState,
  fromPizzaReducers.getPizzasEntities
);
export const getSelectedPizza = createSelector(
  getPizzasEntities,
  getRouterstate,
  (entities, router): Pizza => {
    return router.state && entities[router.state.params.pizzaId];
  }
);
export const getAllPizzas = createSelector(getPizzasEntities, entities => {
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});
export const getPizzasLoaded = createSelector(
  getPizzasState,
  fromPizzaReducers.getPizzasLoaded
);
export const getPizzasLoading = createSelector(
  getPizzasState,
  fromPizzaReducers.getPizzasLoading
);
