import * as ShippingActions from './shipping.actions';
import { IShippingLabelState } from '../models/shippingLableState';
import { ProgressSteps } from '../models/progress-step';
import { UPDATE_QUANTITY } from './shipping.actions';

const initialState: IShippingLabelState = {
    nextRoute: '/receiver-route',
    previousRoute: null,
    currentStep: ProgressSteps.none,
    senderAddress: null,
    receiverAddress: null,
    quantity: 0
};

export default function ShippingLabelReducer(state = initialState,
    action: ShippingActions.ShippingActions): IShippingLabelState {
    switch (action.type) {
        case ShippingActions.UPDATE_ROUTES:
            return {
                ...state,
                nextRoute: action.payLoad.nextRoute,
                previousRoute: action.payLoad.previousRoute
            };
        case ShippingActions.UPDATE_STEP:
            return {
                ...state,
                currentStep: action.payLoad
            };
        case ShippingActions.UPDATE_FROM_ADDRESS:
            return {
                ...state,
                senderAddress: action.payLoad
            };
        case ShippingActions.UPDATE_TO_ADDRESS:
            return {
                ...state,
                receiverAddress: action.payLoad
            };
        case ShippingActions.UPDATE_QUANTITY:
            return {
                ...state,
                quantity: action.payLoad
            };
        default:
            return state;
    }
}


