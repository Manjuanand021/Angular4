import { IShState } from '../../models/ShState';
import { ShStep } from '../../models/sh-step';
import Address from '../../models/address';
import { ShippingOption } from '../../models/sh-option';
import { NgForm } from '@angular/forms';
import { WizardAction } from '../../shared/models/wz-action';
import { IAddress } from '../../models/address';

export default class ShUtilityService {
    shippingInfo: IShState;

    constructor() {
        this.shippingInfo = {
            from: new Address(),
            to: new Address(),
            weight: 0,
            option: ShippingOption.Ground,
            cost: 0
        }
    }

    public updateShippingInfo(step: ShStep, shippingContext: { context: NgForm, action: WizardAction }): ShStep {
        let nextStep: ShStep;
        switch (step) {
            case ShStep.FROM:
                // this.shippingInfo.from = this.updateAddress(shippingContext.context);
                this.shippingInfo = {
                    ...this.shippingInfo,
                    from: this.updateAddress(shippingContext.context)
                    // from:{
                    //   ...this.shippingInfo.from,
                    //   ...this.updateAddress(shippingContext.context)
                    // }
                };
                nextStep = shippingContext.action === WizardAction.Next ? ShStep.TO : ShStep.FROM;
                break;
            case ShStep.TO:
                // this.shippingInfo.to = this.updateAddress(shippingContext.context);
                this.shippingInfo = {
                    ...this.shippingInfo,
                    to: this.updateAddress(shippingContext.context)
                    // to:{
                    //   ...this.shippingInfo.from,
                    //   ...this.updateAddress(shippingContext.context)
                    // }
                };
                nextStep = shippingContext.action === WizardAction.Next ? ShStep.WEIGHT : ShStep.FROM;
                break;
            case ShStep.WEIGHT:
                this.shippingInfo = {
                    ...this.shippingInfo,
                    weight: shippingContext.context.value.weight
                };
                nextStep = shippingContext.action === WizardAction.Next ? ShStep.OPTION : ShStep.TO;
                break;
            case ShStep.OPTION:
                this.shippingInfo = {
                    ...this.shippingInfo,
                    option: shippingContext.context.value.option === 'ground' ? ShippingOption.Ground : ShippingOption.Priority
                };
                nextStep = shippingContext.action === WizardAction.Next ? ShStep.CONFIRM : ShStep.WEIGHT;
                break;
            case ShStep.CONFIRM:
                if (shippingContext.action === WizardAction.Prev)
                    nextStep = ShStep.OPTION;
                else {
                    this.shippingInfo = {
                        ...this.shippingInfo,
                        cost: this.calculateShippingCost()
                    }
                }
                break;
        }
        return nextStep;
    }

    private updateAddress(context: NgForm): IAddress {
        const address: IAddress = new Address();
        address.name = context.value.name;
        address.street = context.value.street;
        address.city = context.value.city;
        address.state = context.value.state;
        address.zip = context.value.zip;
        return address;
    }

    private calculateShippingCost(): Number {
        const shippingRate = 0.40;
        return this.shippingInfo.weight * shippingRate *
            (this.shippingInfo.option === ShippingOption.Ground ? 1 : 1.5);
    }
}
