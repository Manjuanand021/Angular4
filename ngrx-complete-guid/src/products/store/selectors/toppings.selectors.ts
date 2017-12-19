// import { createSelector } from "@ngrx/store";
// import * as fromToppingsReducers from "../reducers/toppings.reducers";
// import { ProductsState, getProductState } from "../reducers/index";

// export const getToppingstate = createSelector(
//   getProductState,
//   (state: ProductsState) => state.toppings
// );

// export const getToppingsEntities = createSelector(
//   getToppingstate,
//   fromToppingsReducers.getToppingsEntities
// );

// export const getAllToppings = createSelector(getToppingsEntities, entities => {
//   return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
// });

// export const getToppingsLoaded = createSelector(
//   getToppingstate,
//   fromToppingsReducers.getToppingsLoaded
// );

// export const getToppingsLoading = createSelector(
//   getToppingstate,
//   fromToppingsReducers.getToppingsLoading
// );
