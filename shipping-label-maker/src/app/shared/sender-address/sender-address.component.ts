// import core libs
import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/take';

// import models
import { IAppState } from '../../models/appState';

// import actions and reducers
import * as ShippingActions from '../../store/shipping.actions';

// import services
import RouteChannelService from '../services/route-channel.service';
import { NgForm } from '@angular/forms';

// import models
import { ProgressSteps } from '../../models/progress-step';
import { IShippingLabelState } from '../../models/shippingLableState';
import { IAddress } from '../../models/address';

// import json
import * as routes from '../../data/routes.json';
const definedRoutes = <any>routes;

@Component({
    selector: 'sh-sender-address',
    templateUrl: './sender-address.template.html'
})

export default class SenderAddressComponent implements OnInit, OnDestroy, AfterViewInit {
    private _submitformSubscription: Subscription;
    private _shippingLabelSubscription: Subscription;
    isFormValid: boolean;
    @ViewChild('address') _addressForm: NgForm;
    senderAddress: IAddress;
    constructor(private _store: Store<IAppState>,
        private _routeChannelService: RouteChannelService) { }

    ngOnInit() {
        // Dispatch UPDATE_ROUTES action
        this._store.dispatch(new ShippingActions.UpdateRoutes({
            nextRoute: definedRoutes.receiver,
            previousRoute: definedRoutes.sender
        }));

        // Dispatch UPDATE_STEP action
        this._store.dispatch(new ShippingActions.UpdateStep(1));


        this._submitformSubscription = this._routeChannelService.shippingDataUpdateBus$.subscribe(formData => {
            this._routeChannelService.updateStore(ProgressSteps.sender, this._addressForm);
        });

        // update formstate using formValidation bus   
        this._addressForm.valueChanges.subscribe(data => {
            this._routeChannelService.formValidation$.next(this._addressForm.invalid);
        });
    }
    ngAfterViewInit() {
        // pre-populate sender's address
        this.prePopulateForm();
    }

    private prePopulateForm() {
        this._shippingLabelSubscription = this._store.select('shippingLabel').take(1).subscribe((data: IShippingLabelState) => {
            setInterval(() => {
                this.senderAddress = data.senderAddress;
            });
        });
    }

    updateFormState(formState: boolean) {
        this.isFormValid = formState;
    }

    ngOnDestroy() {
        this._submitformSubscription.unsubscribe();
        if (this._shippingLabelSubscription) {
            this._shippingLabelSubscription.unsubscribe();
        }
    }
}
