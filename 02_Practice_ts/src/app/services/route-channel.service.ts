// import core libs
import { Injectable } from "@angular/core";
import { Subject } from 'rxjs/Subject';
import { Store } from '@ngrx/store';
import { NgForm } from '@angular/forms';

// import models
import { ProgressSteps } from '../models/progress-step';
import { IAppState } from '../models/appState';
import { IAddress } from '../models/address';

// import actions and reducers
import * as ShippingActions from '../store/shipping.actions';

@Injectable()
export default class RouteChannelService {
    submitForm = new Subject<any>();

    constructor(private _store: Store<IAppState>) { }

    navigate() {
        this.submitForm.next();
    }

    updateShippingLabelData(step: ProgressSteps, form: NgForm) {
        // check stpe and fire respective actions
        switch (step) {
            case ProgressSteps.sender:
            case ProgressSteps.reciver:
                const address: IAddress = {
                    name: form.value.name,
                    street: form.value.street,
                    city: form.value.city,
                    state: form.value.state,
                    zip: form.value.zip
                };
                step === ProgressSteps.sender ? this._store.dispatch(new ShippingActions.UpdateFromAddress(address)) :
                    this._store.dispatch(new ShippingActions.UpdateToAddress(address));
                break;
            case ProgressSteps.quantity:
                this._store.dispatch(new ShippingActions.UpdateQuantity(form.value.quantity));
                break;
            default:
                break;
        }
    }
};

