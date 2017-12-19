import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { CanActivate, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { tap, filter, take, switchMap, catchError, map } from "rxjs/operators";
import { of } from "rxjs/observable/of";

import * as fromStore from "../store";
import { Pizza } from "../models/pizza.model";

@Injectable()
export class PizzaExistsGuard implements CanActivate {
  constructor(private store: Store<fromStore.ProductsState>) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => {
        return this.hasPizza(parseInt(route.params.pizzaId, 10));
      })
    );
  }

  hasPizza(id: number): Observable<boolean> {
    return this.store
      .select(fromStore.getPizzasEntities)
      .pipe(map((entities: { [key: number]: Pizza }) => !!entities[id]));
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
