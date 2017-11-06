import {
    CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot
} from '@angular/router';
import {
    Observable
} from 'rxjs';
export default class CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
};

export class DeactivateGuardService implements CanDeactivate<CanComponentDeactivate>  {
    canDeactivate(component: CanComponentDeactivate) {
        return component.canDeactivate();
    }
};
