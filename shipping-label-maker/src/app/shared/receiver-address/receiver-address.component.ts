// import core libs
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { NgForm } from '@angular/forms';
import 'rxjs/add/operator/take';

// import models
import { IAppState } from '../../models/appState';

// import actions and reducers
import * as ShippingActions from '../../store/shipping.actions';
import { ProgressSteps } from '../../models/progress-step';

// import services
import RouteChannelService from '../services/route-channel.service';

// import models
import { IAddress } from '../../models/address';
import { IShippingLabelState } from '../../models/shippingLableState';

// import json
import * as routes from '../../data/routes.json';
const definedRoutes = <any>routes;

@Component({
    selector: 'sh-receiver-address',
    templateUrl: './receiver-address.template.html'
})

export default class ReceiverAddressComponent implements OnInit, AfterViewInit {
    private _shippingLabelSubscription: Subscription;
    private _submitformSubscription: Subscription;

    @ViewChild('address') _addressForm: NgForm;
    receiverAddress: IAddress;
    constructor(private _store: Store<IAppState>,
        private _routeChannelService: RouteChannelService) { }

    ngOnInit() {
        // Dispatch UPDATE_ROUTES action
        this._store.dispatch(new ShippingActions.UpdateRoutes({
            nextRoute: definedRoutes.weight,
            previousRoute: definedRoutes.sender
        }));

        // Dispatch UPDATE_STEP action
        this._store.dispatch(new ShippingActions.UpdateStep(2));

        this._submitformSubscription = this._routeChannelService.shippingDataUpdateBus$.subscribe(formData => {
            this._routeChannelService.updateStore(ProgressSteps.reciver, this._addressForm);
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
                this.receiverAddress = data.receiverAddress;
            });
        });
    }

    ngOnDestroy() {
        this._submitformSubscription.unsubscribe();
        if (this._shippingLabelSubscription) {
            this._shippingLabelSubscription.unsubscribe();
        }
    }
}