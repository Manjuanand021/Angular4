import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Effect, Actions } from '@ngrx/effects';
import * as ShoppingListActions from '../store/shopping-list.actions';
import 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export default class ShipppingListEffects {
    @Effect() getTodos$ = this.action$
        .ofType(ShoppingListActions.GET_TODOS)
        .switchMap(() => {
            return this.slService.getInitialState()
        })
        .map(data => {
            return {
                type: ShoppingListActions.GET_TODOS_SUCCESS,
                payLoad: data[0]
            }
        });

    constructor(private action$: Actions, private slService: ShoppingListService) { }
};
