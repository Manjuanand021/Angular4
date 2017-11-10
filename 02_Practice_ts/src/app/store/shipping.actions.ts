import { Action } from '@ngrx/store';

export const UPDATE_ROUTES = 'UPDATE_ROUTES';

export class UpdateRoutes implements Action {
    readonly type = UPDATE_ROUTES;
    constructor(public payLoad: { nextRoute: string, previousRoute: string }) { }
};

export type ShippingActions = UpdateRoutes;

