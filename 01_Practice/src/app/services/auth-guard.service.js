import {
    Injectable
} from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouteStatementSnapshot
} from '@angular/router';
import {
    Observable
} from 'rxjs';
import AuthService from './authService';

@Injectable()
export default class AuthGuardService {
    constructor(authService: AuthService) {
        this._authService = authService;
    }
    canActivate(activatedRouteSnapshot: ActivatedRouteSnapshot, routerStatementSnapshot: RouterStateSnapshot):
        Observable |
        Promise |
        boolean {
            return this._authService.login().then((status) => {
                console.log('status recieved', status);
                return status;
            });
        }
};