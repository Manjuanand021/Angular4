import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";
import { switchMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs/observable/of";

import * as fromActions from "../actions";
import { PizzasService } from "../../services/pizzas.service";
import { Pizza } from "../../models/pizza.model";

@Injectable()
export class PizzasEffects {
  constructor(private actions$: Actions, private pizzaService: PizzasService) {}
  @Effect()
  loadPizzas$ = this.actions$
    .ofType(fromActions.LOAD_PIZZAS)
    .pipe(switchMap => {
      return this.pizzaService.getPizzas().pipe(
        map((data: Pizza[]) => new fromActions.LoadPizzasSuccess(data)),
        catchError(() => {
          return of(new fromActions.LoadPizzasFail());
        })
      );
    });
}
