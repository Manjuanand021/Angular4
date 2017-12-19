import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { Effect, Actions } from "@ngrx/effects";
import { switchMap, map, catchError, tap } from "rxjs/operators";
import { of } from "rxjs/observable/of";

import * as fromRouterActions from "../actions/router.actions";

@Injectable()
export class RouterEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private location: Location
  ) {}

  @Effect({ dispatch: false })
  navigate$ = this.actions$.ofType(fromRouterActions.GO).pipe(
    map((action: fromRouterActions.Go) => action.payLoad),
    tap(({ path, query: queryParams, extras }) => {
      this.router.navigate(path, { ...queryParams, ...extras });
    })
  );

  @Effect({ dispatch: false })
  navigateBack$ = this.actions$.ofType(fromRouterActions.BACK).pipe(
    tap(() => {
      this.location.back();
    })
  );

  @Effect({ dispatch: false })
  navigateForward$ = this.actions$.ofType(fromRouterActions.FORWARD).pipe(
    tap(() => {
      this.location.forward();
    })
  );
}
