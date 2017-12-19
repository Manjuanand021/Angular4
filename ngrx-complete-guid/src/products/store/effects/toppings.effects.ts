import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";
import { switchMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs/observable/of";

import * as fromActions from "../actions";
import { Topping } from "../../models/topping.model";
import { ToppingsService } from "../../services/toppings.service";

@Injectable()
export class ToppingsEffects {
  constructor(
    private actions$: Actions,
    private toppingsService: ToppingsService
  ) {}
  @Effect()
  loadToppings$ = this.actions$
    .ofType(fromActions.LOAD_TOPPINGS)
    .pipe(switchMap => {
      return this.toppingsService.getToppings().pipe(
        map((data: Topping[]) => {
          return new fromActions.LoadToppingsSuccess(data);
        }),
        catchError(() => {
          return of(new fromActions.LoadToppingsFail());
        })
      );
    });
}
