import { IAddress } from './address.interface';
import { ShippingOption } from './sh-option.enum';

export interface IShippingInfo {
    from: IAddress,
    to: IAddress,
    weight: number,
    option: ShippingOption,
    cost: number
}