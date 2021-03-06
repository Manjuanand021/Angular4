// import core libs
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
// import models
import { IAppState } from '../../models/appState';

// import actions and reducers
import * as ShippingActions from '../../store/shipping.actions';
import { IShippingLabelState } from '../../models/shippingLableState';

// import services
import RouteChannelService from '../services/route-channel.service';
import { Subscription } from 'rxjs/Subscription';
import { ProgressSteps } from '../../models/progress-step';

// import json
import * as routes from '../../data/routes.json';
import { ShippingOption } from '../../models/shipping-option';
const definedRoutes = <any>routes;

@Component({
    selector: 'sh-confirm',
    templateUrl: './confirm.template.html'
})

export default class ConfirmComponent implements OnInit, OnDestroy {
    private _shippingLabelState: Observable<IShippingLabelState>;
    private _shippingDataSubscription: Subscription;
    shippingData: IShippingLabelState;
    constructor(private _store: Store<IAppState>,
        private _routeChannelService: RouteChannelService) { }

    ngOnInit() {
        // Dispatch UPDATE_ROUTES action
        this._store.dispatch(new ShippingActions.UpdateRoutes({
            nextRoute: definedRoutes.confirm,
            previousRoute: definedRoutes.weight
        }));

        // Dispatch UPDATE_STEP action
        this._store.dispatch(new ShippingActions.UpdateStep(ProgressSteps.confirm));

        // get data from store        
        this._shippingLabelState = this._store.select('shippingLabel');

        // Subscribe to shippingLabel data
        this._shippingDataSubscription = this._shippingLabelState.take(1).subscribe((data: IShippingLabelState) => {
            this.shippingData = data;

            // calculate shipping cost            
            const shippingRate = 0.40;
            this.shippingData.shippingCost = (data.weight * shippingRate) * (data.shippingOption === ShippingOption.Ground ? 1 : 1.5);

            console.log('calculated cost', this.shippingData.shippingCost);

            // update store with shipping cost calculated
            // this._store.dispatch(new ShippingActions.UpdateCost(this.shippingData.shippingCost));
            this._routeChannelService.updateStore(ProgressSteps.confirm, null, this.shippingData.shippingCost);
        });
    }

    ngOnDestroy() {
        this._shippingDataSubscription.unsubscribe();
    }
}