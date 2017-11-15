// import core libs
import { Injectable } from "@angular/core";
import { Subject } from 'rxjs/Subject';
import { Store } from '@ngrx/store';
import { NgForm } from '@angular/forms';

// import models
import { ProgressSteps } from '../../models/progress-step';
import { IAppState } from '../../models/appState';
import { IAddress } from '../../models/address';

// import actions and reducers
import * as ShippingActions from '../../store/shipping.actions';

@Injectable()
export default class RouteChannelService {
    shippingDataUpdateBus$ = new Subject<any>();
    formValidation$ = new Subject<any>();
    constructor(private _store: Store<IAppState>) { }

    navigate() {
        this.shippingDataUpdateBus$.next();
    }

    updateStore(step: ProgressSteps, form: NgForm = null, cost: number = 0) {
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
            case ProgressSteps.weight:
                this._store.dispatch(new ShippingActions.UpdateWeight(form.value.weight));
                break;
            case ProgressSteps.confirm:
                console.log('trying to update the cost here', cost);
                // update store with shipping cost calculated
                this._store.dispatch(new ShippingActions.UpdateCost(cost));
                break;
            default:
                break;
        }
    }
};

