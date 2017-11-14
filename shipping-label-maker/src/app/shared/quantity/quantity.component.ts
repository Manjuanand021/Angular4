// import core libs
import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';

// import models
import { IAppState } from '../../models/appState';

// import actions and reducers
import * as ShippingActions from '../../store/shipping.actions';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { ProgressSteps } from '../../models/progress-step';
import { IShippingLabelState } from '../../models/shippingLableState';

// import services
import RouteChannelService from '../../services/route-channel.service';

// import json
// import json
import * as routes from '../../data/routes.json';
const definedRoutes = <any>routes;

@Component({
    selector: 'sh-quantity',
    templateUrl: './quantity.template.html'
})

export default class QuantityComponent implements OnInit, OnDestroy, AfterViewInit {
    private _submitformSubscription: Subscription;
    private _shippingLabelSubscription: Subscription;

    @ViewChild('quantity') _quantityForm: NgForm;
    quantityVal: number;

    constructor(private _store: Store<IAppState>,
        private _routeChannelService: RouteChannelService) { }

    ngOnInit() {
        // Dispatch UPDATE_ROUTES action
        this._store.dispatch(new ShippingActions.UpdateRoutes({
            nextRoute: definedRoutes.confirm,
            previousRoute: definedRoutes.receiver
        }));

        // Dispatch UPDATE_STEP action
        this._store.dispatch(new ShippingActions.UpdateStep(3));

        // Update shipping data - connect to shippingDataUpdateBus$ bus
        // this._submitformSubscription = this._routeChannelService.updateShippingData(ProgressSteps.reciver, this._quantityForm);

        this._submitformSubscription = this._routeChannelService.shippingDataUpdateBus$.subscribe(formData => {
            this._routeChannelService.updateStore(ProgressSteps.quantity, this._quantityForm);
        });
    }

    ngAfterViewInit() {
        // pre-populate sender's address
        // this.prePopulateForm();
    }

    // private prePopulateForm() {
    //     this._shippingLabelSubscription = this._store.select('shippingLabel').subscribe((data: IShippingLabelState) => {
    //         setInterval(() => {
    //             this.quantityVal = data.quantity;
    //             console.log('quantity', this.quantityVal);
    //         });
    //     });
    // }

    ngOnDestroy() {
        this._submitformSubscription.unsubscribe();
        // if (this._shippingLabelSubscription) {
        //     this._shippingLabelSubscription.unsubscribe();
        // }
    }
}