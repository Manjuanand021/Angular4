import { PizzaGuard } from "./pizzas.guard";
import { PizzaExistsGuard } from "./pizza-exists.guard";

export const guards: any[] = [PizzaGuard, PizzaExistsGuard];

export * from "./pizzas.guard";
export * from "./pizza-exists.guard";
