import {
    Injectable
} from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Router,
    RouterStateSnapshot,
    CanDeactivate,
    CanActivate,
    CanActivateChild
} from '@angular/router';
import {
    Observable
} from 'rxjs';
import AuthService from './auth.service';

@Injectable()
export default class AuthGuardService implements CanActivate, CanActivateChild {
    _authService: AuthService;
    _router: Router;
    constructor(authService: AuthService, router: Router) {
        this._authService = authService;
        this._router = router;
    }
    canActivate(activatedRouteSnapshot: ActivatedRouteSnapshot, routerStatementSnapshot: RouterStateSnapshot):
        Observable<boolean> |
        Promise<boolean> |
        boolean {
        return this._authService.login().then((status: boolean) => {
            console.log('status recieved', status);
            if (!status) {
                this._router.navigate(['/']);
            }
            return status;
        });
    }
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> |
        Promise<boolean> |
        boolean {
        return this.canActivate(route, state);
    }
}