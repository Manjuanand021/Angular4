import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { IShState } from '../../models/ShState';
import ShUtilityService from '../services/sh-utility.service';
import { ShStep } from '../../models/sh-step';
import { WizardAction } from '../../shared/models/wz-action';
import { NgForm } from '@angular/forms';
import { IAddress } from '../../models/address';
import Address from '../../models/address';
let instance = 0;
@Component({
  selector: 'sh-maker',
  templateUrl: './sh-maker.template.html',
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class ShMakerComponent implements OnInit {
  shippingInfo: IShState
  step: ShStep;
  constructor(private shUtilityServie: ShUtilityService) {
    instance++;
  }

  ngOnInit() {
    //set intial state
    this.shippingInfo = this.shUtilityServie.shippingInfo;
    this.step = ShStep.FROM;

    console.log('sh-maker', instance);
  }

  changeStep(shippingContext: { context: NgForm, action: WizardAction }) {
    this.updateShippingInfo(shippingContext);
  }

  private updateShippingInfo(shippingContext: { context: NgForm, action: WizardAction }) {
    switch (this.step) {
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
        this.step = shippingContext.action === WizardAction.Next ? ShStep.TO : ShStep.FROM;
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
        this.step = shippingContext.action === WizardAction.Next ? ShStep.WEIGHT : ShStep.TO;
        break;
      default:
        break;
    }
    console.log('shippingInfo obj sh-maker', this.shippingInfo);
  }

  private updateAddress(context: NgForm) {
    const address: IAddress = new Address();
    address.name = context.value.name;
    address.street = context.value.street;
    address.city = context.value.city;
    address.state = context.value.state;
    address.zip = context.value.zip;
    return address;
  }
}
