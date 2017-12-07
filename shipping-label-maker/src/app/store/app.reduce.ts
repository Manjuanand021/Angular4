import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../models/appState';
import ShippingLabelReducer from './shipping.reducers';

export const reducers: ActionReducerMap<IAppState> = {
    shippingLabel: ShippingLabelReducer
}