import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { CanActivate } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { tap, filter, take, switchMap, catchError } from "rxjs/operators";
import { of } from "rxjs/observable/of";

import * as fromStore from "../store";

@Injectable()
export class PizzaGuard implements CanActivate {
  constructor(private store: Store<fromStore.ProductsState>) {}

  canActivate(): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => {
        return of(true);
      }),
      catchError(() => {
        return of(false);
      })
    );
  }

  checkStore(): Observable<boolean> {
    return this.store.select(fromStore.getPizzasLoaded).pipe(
      tap(loaded => {
        if (!loaded) this.store.dispatch(new fromStore.LoadPizzas());
      }),
      filter((loaded: boolean) => {
        return loaded;
      }),
      take(1)
    );
  }
}
