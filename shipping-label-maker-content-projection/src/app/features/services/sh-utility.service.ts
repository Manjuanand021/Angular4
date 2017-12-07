import { IShState } from '../../models/ShState';
import { ShStep } from '../../models/sh-step';
import Address from '../../models/address';
import { ShippingOption } from '../../models/sh-option';

export default class ShUtilityService {
    shippingInfo: IShState;

    constructor() {
        this.shippingInfo = {
            from: new Address(),
            to: new Address(),
            weight: 0,
            shippingOption: ShippingOption.Ground
        }
    }

    updateStore(step: ShStep) {
        switch (step) {
            case ShStep.FROM:
                break;
            case ShStep.TO:
                break;
            default:
                break;
        }
    }
}