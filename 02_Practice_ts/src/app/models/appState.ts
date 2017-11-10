import { IShippingLabelState } from './shippingLableState';
import { ActionReducerMap } from '@ngrx/store';
import ShippingLabelReducer from '../store/shipping.reducers';

export interface IAppState {
    shippingLabel: IShippingLabelState;
}

export const reducers: ActionReducerMap<IAppState> = {
    shippingLabel: ShippingLabelReducer
}