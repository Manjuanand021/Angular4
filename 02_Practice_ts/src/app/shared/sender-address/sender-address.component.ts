// import core libs
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';

// import models
import { IAppState } from '../../models/appState';

// import actions and reducers
import * as ShippingActions from '../../store/shipping.actions';

// import services
import RouteChannelService from '../../services/route-channel.service';
import { NgForm } from '@angular/forms';

// import models
import { ProgressSteps } from '../../models/progress-step';

// import json
const routes = require('../../data/routes.json');

@Component({
    selector: 'sh-sender-address',
    template: require('./sender-address.template.html')
})

export default class SenderAddressComponent implements OnInit, OnDestroy {
    @ViewChild('address') _addressForm: NgForm;
    private _submitformSubscription: Subscription;
    constructor(private _store: Store<IAppState>,
        private _routeChannelService: RouteChannelService) { }

    ngOnInit() {
        // Dispatch UPDATE_ROUTES action
        this._store.dispatch(new ShippingActions.UpdateRoutes({
            nextRoute: routes.receiver,
            previousRoute: routes.sender
        }));

        // Dispatch UPDATE_STEP action
        this._store.dispatch(new ShippingActions.UpdateStep(1));

        // Subscribe to submitForm subject observable
        this._submitformSubscription = this._routeChannelService.submitForm.subscribe(formData => {
            this._routeChannelService.updateShippingLabelData(ProgressSteps.sender, this._addressForm);
        });
    }

    ngOnDestroy() {
        this._submitformSubscription.unsubscribe();
    }
}
