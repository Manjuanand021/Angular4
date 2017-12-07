import { ProgressSteps } from './progress-step';
import { IAddress } from './address';
import { ShippingOption } from './shipping-option';

export interface IShippingLabelState {
    nextRoute: string;
    previousRoute: string;
    currentStep: ProgressSteps;
    senderAddress: IAddress;
    receiverAddress: IAddress;
    weight: number;
    shippingCost: number;
    shippingOption: ShippingOption
}
