import * as ShippingActions from './shipping.actions';
import { IShippingLabelState } from '../models/shippingLableState';
import { ProgressSteps } from '../models/progress-step';
import { UPDATE_WEIGHT } from './shipping.actions';
import { ShippingOption } from '../models/shipping-option';
// import json
import * as customRoutes from '../data/routes.json';
const definedRoutes = <any>customRoutes;

const initialState: IShippingLabelState = {
    nextRoute: `/${definedRoutes.receiver}`,
    previousRoute: null,
    currentStep: ProgressSteps.none,
    senderAddress: null,
    receiverAddress: null,
    weight: 0,
    shippingCost: 0,
    shippingOption: ShippingOption.Ground
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
        case ShippingActions.UPDATE_WEIGHT:
            return {
                ...state,
                weight: action.payLoad
            };
        case ShippingActions.UPDATE_COST:
            return {
                ...state,
                shippingCost: action.payLoad
            };
        case ShippingActions.UPDATE_SSHIPPING_OPTION:
            return {
                ...state,
                shippingOption: action.payLoad
            };
        default:
            return state;
    }
}


