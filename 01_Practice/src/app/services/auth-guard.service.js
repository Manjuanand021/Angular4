import {
    Injectable
} from '@angular/core';
import {
    CanActivate,
    CanActivateChild,
    ActivatedRouteSnapshot,
    RouteStatementSnapshot,
    Router
} from '@angular/router';
import {
    Observable
} from 'rxjs';
import AuthService from './auth.service';

@Injectable()
export default class AuthGuardService {
    constructor(authService: AuthService, router: Router) {
        this._authService = authService;
        this._router = router;
    }
    canActivate(activatedRouteSnapshot: ActivatedRouteSnapshot, routerStatementSnapshot: RouterStateSnapshot):
        Observable |
        Promise |
        boolean {
            return this._authService.login().then((status) => {
                console.log('status recieved', status);
                if (!status)
                    this._router.navigate(['/']);
                return status;
            });
        }
    CanActivateChild(activatedRouteSnapshot: ActivatedRouteSnapshot, routerStatementSnapshot: RouterStateSnapshot):
        Observable |
        Promise |
        boolean {
            return this.canActivate(activatedRouteSnapshot, routerStatementSnapshot);
        }
}