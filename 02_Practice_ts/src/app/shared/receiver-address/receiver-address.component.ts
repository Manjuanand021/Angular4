// import core libs
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

// import models
import { IAppState } from '../../models/appState';

// import actions and reducers
import * as ShippingActions from '../../store/shipping.actions';

// import json
const routes = require('../../data/routes.json');

@Component({
    selector: 'sh-receiver-address',
    template: require('./receiver-address.template.html')
})

export default class ReceiverAddressComponent implements OnInit {
    constructor(private _store: Store<IAppState>) { }

    ngOnInit() {
        // Dispatch UPDATE_ROUTES action
        this._store.dispatch(new ShippingActions.UpdateRoutes({
            nextRoute: routes.quantity,
            previousRoute: routes.sender
        }));
    }
}