import * as fromToppingsActions from "../actions/toppings.actions";
import { Topping } from "../../models/topping.model";

export interface ToppingsState {
  entities: { [id: number]: Topping };
  loaded: boolean;
  loading: boolean;
}
export const initialState: ToppingsState = {
  entities: {},
  loaded: false,
  loading: false
};

export function reducers(
  state = initialState,
  action: fromToppingsActions.ToppingsActions
): ToppingsState {
  switch (action.type) {
    case fromToppingsActions.LOAD_TOPPINGS: {
      return { ...state, loading: true };
    }
    case fromToppingsActions.LOAD_TOPPINGS_SUCCESS: {
      console.log("toppings", action.payLoad);
      const toppings = action.payLoad;
      const entities = toppings.reduce(
        (entities: { [id: number]: Topping }, topping) => {
          return {
            ...entities,
            [topping.id]: topping
          };
        },
        {
          ...state.entities
        }
      );
      return { ...state, loaded: true, loading: false, entities };
    }
    case fromToppingsActions.LOAD_TOPPINGS_FAIL: {
      return { ...state, loaded: false, loading: false };
    }
    default: {
      return state;
    }
  }
}

export const getToppingsEntities = (state: ToppingsState) => state.entities;
export const getToppingsLoading = (state: ToppingsState) => state.loading;
export const getToppingsLoaded = (state: ToppingsState) => state.loaded;
