export const UPDATE_ROUTES = 'UPDATE_ROUTES';
export default class UpdateRoutes {
    readonly type = UPDATE_ROUTES;
    constructor(public payLoad: { nextRoute: string, previousRoute: string }) { }
};

export type ShippingActions = UpdateRoutes;

