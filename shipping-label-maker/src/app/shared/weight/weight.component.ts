// import core libs
import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/take';

// import models
import { IAppState } from '../../models/appState';

// import actions and reducers
import * as ShippingActions from '../../store/shipping.actions';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { ProgressSteps } from '../../models/progress-step';
import { IShippingLabelState } from '../../models/shippingLableState';

// import services
import RouteChannelService from '../services/route-channel.service';

// import json
import * as routes from '../../data/routes.json';
const definedRoutes = <any>routes;

@Component({
    selector: 'sh-weight',
    templateUrl: './weight.template.html'
})

export default class WeightComponent implements OnInit, OnDestroy, AfterViewInit {
    private _submitformSubscription: Subscription;
    private _shippingLabelSubscription: Subscription;

    @ViewChild('weight') _weightForm: NgForm;
    weightVal: number;

    constructor(private _store: Store<IAppState>,
        private _routeChannelService: RouteChannelService) { }

    ngOnInit() {
        // Dispatch UPDATE_ROUTES action
        this._store.dispatch(new ShippingActions.UpdateRoutes({
            nextRoute: definedRoutes.option,
            previousRoute: definedRoutes.receiver
        }));

        // Dispatch UPDATE_STEP action
        this._store.dispatch(new ShippingActions.UpdateStep(ProgressSteps.weight));


        this._submitformSubscription = this._routeChannelService.shippingDataUpdateBus$.subscribe(formData => {
            this._routeChannelService.updateStore(ProgressSteps.weight, this._weightForm);
        });

        // update formstate using formValidation bus   
        this._weightForm.valueChanges.subscribe(data => {
            this._routeChannelService.formValidation$.next(data.weight <= 0);
        });
    }

    ngAfterViewInit() {
        // pre-populate sender's address
        this.prePopulateForm();
    }

    private prePopulateForm() {
        this._shippingLabelSubscription = this._store.select('shippingLabel').take(1).subscribe((data: IShippingLabelState) => {
            setTimeout(() => {
                this.weightVal = data.weight;
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