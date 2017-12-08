import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { IShState } from '../../models/ShState';
import ShUtilityService from '../services/sh-utility.service';
import { ShStep } from '../../models/sh-step';
import { WizardAction } from '../../shared/models/wz-action';
import { NgForm } from '@angular/forms';
import { IAddress } from '../../models/address';
import Address from '../../models/address';
import { ShippingOption } from '../../models/sh-option';
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
  showLblInfo: boolean;
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

  private updateShippingInfo(shippingContext: { context: NgForm, action: WizardAction }): void
  {
    //hide sh-label component until we reach confirm step
    this.showLblInfo = false;

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
        this.step = shippingContext.action === WizardAction.Next ? ShStep.WEIGHT : ShStep.FROM;
        break;
      case ShStep.WEIGHT:
        this.shippingInfo = {
          ...this.shippingInfo,
          weight: shippingContext.context.value.weight
        };
        this.step = shippingContext.action === WizardAction.Next ? ShStep.OPTION : ShStep.TO;
        break;
      case ShStep.OPTION:      
        this.shippingInfo = {
          ...this.shippingInfo,
          option: shippingContext.context.value.option
        };
        this.step = shippingContext.action === WizardAction.Next ? ShStep.CONFIRM : ShStep.WEIGHT;
        break;
      case ShStep.CONFIRM:
        if (shippingContext.action === WizardAction.Prev)
          this.step = ShStep.OPTION;
        else {
          this.shippingInfo = {
            ...this.shippingInfo,
            cost: this.calculateShippingCost()
          }
          this.showLblInfo = true;
        }
        break;
    }
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
    console.log(typeof this.shippingInfo.option);
    console.log(typeof ShippingOption[ShippingOption.Ground]);          
    return this.shippingInfo.weight * shippingRate *
       (this.shippingInfo.option === ShippingOption.Ground? 1 : 1.5);
  }
}
