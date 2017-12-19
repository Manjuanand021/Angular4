import { Action } from "@ngrx/store";
import { Topping } from "../../models/topping.model";

export const LOAD_TOPPINGS = "[Products] Load TOPPINGS";
export const LOAD_TOPPINGS_SUCCESS = "[Products] Load TOPPINGS Success";
export const LOAD_TOPPINGS_FAIL = "[Products] Load TOPPINGS Fali";

export class LoadToppings implements Action {
  readonly type = LOAD_TOPPINGS;
}
export class LoadToppingsSuccess implements Action {
  readonly type = LOAD_TOPPINGS_SUCCESS;
  constructor(public payLoad: Topping[]) {}
}
export class LoadToppingsFail implements Action {
  readonly type = LOAD_TOPPINGS_FAIL;
}

export type ToppingsActions =
  | LoadToppings
  | LoadToppingsSuccess
  | LoadToppingsFail;
