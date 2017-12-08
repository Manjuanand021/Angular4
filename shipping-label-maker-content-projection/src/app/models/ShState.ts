import { IAddress } from './address';
import { ShippingOption } from './sh-option';
export interface IShState {
    from: IAddress,
    to: IAddress,
    weight: number,
    option: ShippingOption,
    cost: Number
}