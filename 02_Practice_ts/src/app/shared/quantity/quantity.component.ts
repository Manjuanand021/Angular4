// import core libs
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

// import models
import { IAppState } from '../../models/appState';

// import actions and reducers
import * as ShippingActions from '../../store/shipping.actions';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { ProgressSteps } from '../../models/progress-step';

// import services
import RouteChannelService from '../../services/route-channel.service';

// import json
const routes = require('../../data/routes.json');

@Component({
    selector: 'sh-quantity',
    template: require('./quantity.template.html')
})

export default class QuantityComponent implements OnInit, OnDestroy {
    @ViewChild('quantity') _quantityForm: NgForm;
    private _submitformSubscription: Subscription;

    constructor(private _store: Store<IAppState>,
        private _routeChannelService: RouteChannelService) { }

    ngOnInit() {
        // Dispatch UPDATE_ROUTES action
        this._store.dispatch(new ShippingActions.UpdateRoutes({
            nextRoute: routes.confirm,
            previousRoute: routes.receiver
        }));

        // Dispatch UPDATE_STEP action
        this._store.dispatch(new ShippingActions.UpdateStep(3));

        // Subscribe to submitForm subject observable
        this._submitformSubscription = this._routeChannelService.submitForm.subscribe(formData => {
            this._routeChannelService.updateShippingLabelData(ProgressSteps.quantity, this._quantityForm);
        });
    }

    ngOnDestroy() {
        this._submitformSubscription.unsubscribe();
    }
}