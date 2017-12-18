import { Pizza } from "../../models/pizza.model";
import * as fromPizzaActions from "../actions/pizzas.action";
import { LOAD_PIZZAS_FAIL } from "../actions/pizzas.action";

export interface PizzasState {
  entities: { [id: number]: Pizza };
  loaded: boolean;
  loading: boolean;
}
export const initialState: PizzasState = {
  entities: {},
  loaded: false,
  loading: false
};

export function reducers(
  state = initialState,
  action: fromPizzaActions.PizzaActions
): PizzasState {
  switch (action.type) {
    case fromPizzaActions.LOAD_PIZZAS:
      return { ...state, loading: true };
    case fromPizzaActions.LOAD_PIZZAS_SUCCESS:
      // [{ id: 1 }, { id: 2 }]
      // const pizza = {
      //   1:{
      //     id: 1,
      //       name: 'pizza name',
      //     toppings:[]
      //   }
      // }
      const pizzas = action.payLoad;
      const entities = pizzas.reduce(
        (entities: { [id: number]: Pizza }, pizza) => {
          return {
            ...entities,
            [pizza.id]: pizza
          };
        },
        {
          ...state.entities
        }
      );
      return {
        ...state,
        loaded: true,
        loading: false,
        entities
      };
    case fromPizzaActions.LOAD_PIZZAS_FAIL:
      return { ...state, loaded: false, loading: false };
    default:
      return state;
  }
}

export const getPizzasLoading = (state: PizzasState) => state.loading;
export const getPizzasLoaded = (state: PizzasState) => state.loaded;
export const getPizzasEntities = (state: PizzasState) => state.entities;
