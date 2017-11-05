import {
    CanDeactivate
} from '@angular/router';
import {
    Observable
} from 'rxjs';
export default class DeactivateInterface {
    canDeactivate():
        Observable |
        Promise |
        bool {

        }
};

export class DeactivateGuardService implements CanDeactivate < DeactivateInterface > {
    CanDeactivate(component: DeactivateInterface,
        activatedRouteSnapshot: ActivatedRouteSnapshot,
        routerStatementSnapshot: RouterStateSnapshot,
        nextState: RouterStateSnapshot): Observable |
        Promise |
        boolean {
            return component.canDeactivate();
        }
};