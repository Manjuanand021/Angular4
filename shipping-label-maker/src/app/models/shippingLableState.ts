import { ProgressSteps } from './progress-step';
import { IAddress } from './address';

export interface IShippingLabelState {
    nextRoute: string;
    previousRoute: string;
    currentStep: ProgressSteps;
    senderAddress: IAddress;
    receiverAddress: IAddress;
    weight: number;
    shippingCost: number;
}
