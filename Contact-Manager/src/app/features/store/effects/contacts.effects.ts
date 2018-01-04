import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";
import { of } from "rxjs/observable/of";
import { map, switchMap, catchError } from "rxjs/operators";

import { ContactsService } from "../../services";
import * as fromContactActions from "../actions";
import { Contact } from "../../models";

@Injectable()
export class ContactEffects {
  constructor(
    private action$: Actions,
    private contactsService: ContactsService
  ) {}

  @Effect()
  loadContacts$ = this.action$
    .ofType(fromContactActions.LOAD_CONTACTS)
    .pipe(switchMap => {
      return this.contactsService.getAllContacts().pipe(
        map(
          (data: Contact[]) => new fromContactActions.LoadContactssuccess(data)
        ),
        catchError(() => {
          return of(new fromContactActions.LoadContactsFail());
        })
      );
    });
}
