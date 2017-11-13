// import core libs
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

// import models
import { IAppState } from '../../models/appState';

// import actions and reducers
import * as ShippingActions from '../../store/shipping.actions';
import { IShippingLabelState } from '../../models/shippingLableState';

// import services
import RouteChannelService from '../../services/route-channel.service';

// import json
const routes = require('../../data/routes.json');

@Component({
    selector: 'sh-confirm',
    template: require('./confirm.template.html')
})

export default class ConfirmComponent implements OnInit, OnDestroy {
    private shippingLabelState: Observable<IShippingLabelState>;

    constructor(private _store: Store<IAppState>,
        private _routeChannelService: RouteChannelService) { }

    ngOnInit() {
        // Dispatch UPDATE_ROUTES action
        this._store.dispatch(new ShippingActions.UpdateRoutes({
            nextRoute: routes.confirm,
            previousRoute: routes.quantity
        }));

        // Dispatch UPDATE_STEP action
        this._store.dispatch(new ShippingActions.UpdateStep(4));

        // get data from store        
        this.shippingLabelState = this._store.select('shippingLabel');
    }

    ngOnDestroy() {
        // this._submitformSubscription.unsubscribe();
    }
}