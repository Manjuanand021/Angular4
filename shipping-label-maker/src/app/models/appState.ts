import { IShippingLabelState } from './shippingLableState';
import ShippingLabelReducer from '../store/shipping.reducers';

export interface IAppState {
    shippingLabel: IShippingLabelState;
}

