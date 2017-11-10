import * as ShippingActions from './shipping.actions';
import { IShippingLabelState } from '../models/shippingLableState';

const initialState: IShippingLabelState = {
    nextRoute: '/receiver-route',
    previousRoute: null
};

export default function ShippingLabelReducer(state = initialState,
    action: ShippingActions.ShippingActions) {
    switch (action.type) {
        case ShippingActions.UPDATE_ROUTES:
            return {
                ...state,
                nextRoute: action.payLoad.nextRoute,
                previousRoute: action.payLoad.previousRoute
            };
        default:
            return state;
    }
}
