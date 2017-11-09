import { IAppState } from '../models/appState';
import * as ShippingActions from './shipping.actions';
const initialState: IAppState = {
    nextRoute: '/receiver-route',
    previousRoute: null
};

export default function ShoppingLabelReducer(state = initialState,
    action: ShippingActions.ShippingActions) {
    switch (action.type) {
        case ShippingActions.UPDATE_ROUTES:
            const currentState: IAppState = {
                ...state
            };
            currentState.nextRoute = action.payLoad.nextRoute;
            currentState.previousRoute = action.payLoad.previousRoute;
            return currentState;
        default:
            return state;
    }
}
