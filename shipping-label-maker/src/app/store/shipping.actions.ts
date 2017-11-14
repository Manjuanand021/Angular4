import { Action } from '@ngrx/store';
import { IAddress } from '../models/address';

export const UPDATE_ROUTES = 'UPDATE_ROUTES';
export const UPDATE_STEP = 'UPDATE_STEP';
export const UPDATE_FROM_ADDRESS = 'UPDATE_FROM_ADDRESS';
export const UPDATE_TO_ADDRESS = 'UPDATE_TO_ADDRESS';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
export const UPDATE_COST = 'UPDATE_COST';

export class UpdateRoutes implements Action {
    readonly type = UPDATE_ROUTES;
    constructor(public payLoad: { nextRoute: string, previousRoute: string }) { }
};
export class UpdateStep implements Action {
    readonly type = UPDATE_STEP;
    constructor(public payLoad: number) { }
};
export class UpdateFromAddress implements Action {
    readonly type = UPDATE_FROM_ADDRESS;
    constructor(public payLoad: IAddress) { }
};
export class UpdateToAddress implements Action {
    readonly type = UPDATE_TO_ADDRESS;
    constructor(public payLoad: IAddress) { }
};
export class UpdateQuantity implements Action {
    readonly type = UPDATE_QUANTITY;
    constructor(public payLoad: number) { }
};
export class UpdateCost implements Action {
    readonly type = UPDATE_COST;
    constructor(public payLoad: number) { }
};

export type ShippingActions = UpdateRoutes |
    UpdateStep |
    UpdateFromAddress |
    UpdateToAddress |
    UpdateQuantity |
    UpdateCost;

