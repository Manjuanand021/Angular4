import { Action } from '@ngrx/store';
import { IAddress } from '../models/address';
import { ShippingOption } from '../models/shipping-option';

export const UPDATE_ROUTES = 'UPDATE_ROUTES';
export const UPDATE_STEP = 'UPDATE_STEP';
export const UPDATE_FROM_ADDRESS = 'UPDATE_FROM_ADDRESS';
export const UPDATE_TO_ADDRESS = 'UPDATE_TO_ADDRESS';
export const UPDATE_WEIGHT = 'UPDATE_WEIGHT';
export const UPDATE_COST = 'UPDATE_COST';
export const UPDATE_SSHIPPING_OPTION = 'UPDATE_SSHIPPING_OPTION';

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
export class UpdateWeight implements Action {
    readonly type = UPDATE_WEIGHT;
    constructor(public payLoad: number) { }
};
export class UpdateShippingOption implements Action {
    readonly type = UPDATE_SSHIPPING_OPTION;
    constructor(public payLoad: ShippingOption) { }
};
export class UpdateCost implements Action {
    readonly type = UPDATE_COST;
    constructor(public payLoad: number) { }
};

export type ShippingActions = UpdateRoutes |
    UpdateStep |
    UpdateFromAddress |
    UpdateToAddress |
    UpdateWeight |
    UpdateShippingOption |
    UpdateCost;

