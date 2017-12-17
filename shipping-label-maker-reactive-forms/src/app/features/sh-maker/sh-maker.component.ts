import { Component, OnInit, ViewEncapsulation, ViewChild } from "@angular/core";
import { NgForm, FormBuilder, FormGroup } from "@angular/forms";

import { ShStep } from "../contracts/sh-step.enum";
import { WizardAction } from "../../shared/models/wz-action";
import { IShippingInfo } from "../contracts/sh-info.interface";
import { IAddress } from "../contracts/address.interface";
import { Address } from "../models/address.model";
import { ShippingOption } from "../contracts/sh-option.enum";

let instance = 0;
@Component({
  selector: "sh-maker",
  templateUrl: "./sh-maker.template.html",
  encapsulation: ViewEncapsulation.None
})
export class ShMakerComponent implements OnInit {
  shippingInfo: IShippingInfo;
  step: ShStep;
  showLblInfo: boolean;

  form: FormGroup;

  constructor(private _fb: FormBuilder) {
    instance++;
  }

  ngOnInit() {
    //set intial state
    // this.shippingInfo = this.shUtilityServie.shippingInfo;
    this.step = ShStep.FROM;

    this.form = this.createGroup();

    console.log("sh-maker", instance);
  }

  createGroup() {
    const group = this._fb.group({
      from: this._fb.group({
        name: this._fb.control(""),
        street: this._fb.control(""),
        city: this._fb.control(""),
        state: this._fb.control(""),
        zip: this._fb.control("")
      }),
      to: this._fb.group({
        name: this._fb.control(""),
        street: this._fb.control(""),
        city: this._fb.control(""),
        state: this._fb.control(""),
        zip: this._fb.control("")
      }),
      weight: this._fb.control(""),
      option: this._fb.control("")
    });
    return group;
  }

  changeStep(action: WizardAction) {
    this.updateShippingInfo(action);
  }

  private updateShippingInfo(action: WizardAction): void {
    console.log("updated form", this.form);

    //hide sh-label component until we reach confirm step
    this.showLblInfo = false;

    switch (this.step) {
      case ShStep.FROM:
        this.shippingInfo = {
          ...this.shippingInfo,
          from: this.updateAddress(this.form.value.from)
          // from:{
          //   ...this.shippingInfo.from,
          //   ...this.updateAddress(shippingContext.context)
          // }
        };
        this.step = action === WizardAction.Next ? ShStep.TO : ShStep.FROM;
        break;
      case ShStep.TO:
        this.shippingInfo = {
          ...this.shippingInfo,
          to: this.updateAddress(this.form.value.to)
          // to:{
          //   ...this.shippingInfo.from,
          //   ...this.updateAddress(shippingContext.context)
          // }
        };
        this.step = action === WizardAction.Next ? ShStep.WEIGHT : ShStep.FROM;
        break;
      case ShStep.WEIGHT:
        this.shippingInfo = {
          ...this.shippingInfo,
          weight: this.form.value.weight
        };
        this.step = action === WizardAction.Next ? ShStep.OPTION : ShStep.TO;
        break;
      case ShStep.OPTION:
        this.shippingInfo = {
          ...this.shippingInfo,
          option: this.form.value.option
        };
        if (action === WizardAction.Prev) this.step = ShStep.WEIGHT;
        else {
          this.shippingInfo = {
            ...this.shippingInfo,
            cost: this.calculateShippingCost()
          };
          this.showLblInfo = true;
        }
        break;
    }
  }

  private updateAddress(value: IAddress): IAddress {
    const address: IAddress = new Address();
    address.name = value.name;
    address.street = value.street;
    address.city = value.city;
    address.state = value.state;
    address.zip = value.zip;
    return address;
  }

  private calculateShippingCost(): number {
    const shippingRate = 0.4;
    console.log(typeof this.shippingInfo.option);
    console.log(typeof ShippingOption[ShippingOption.Ground]);
    return (
      this.shippingInfo.weight *
      shippingRate *
      (this.shippingInfo.option === ShippingOption.Ground ? 1 : 1.5)
    );
  }
}
