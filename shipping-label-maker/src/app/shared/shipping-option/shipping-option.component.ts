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
import { ShippingOption } from '../../models/shipping-option';
const definedRoutes = <any>routes;

@Component({
    selector: 'sh-option',
    templateUrl: './shipping-option.template.html'
})

export default class ShippingOptionComponent implements OnInit, OnDestroy, AfterViewInit {
    shippingOption: string;
    @ViewChild('option') _optionForm: NgForm;
    private _submitformSubscription: Subscription;
    private _shippingLabelSubscription: Subscription;
    constructor(private _store: Store<IAppState>,
        private _routeChannelService: RouteChannelService) {
        this.shippingOption = 'ground';
    }

    ngOnInit() {
        // Dispatch UPDATE_ROUTES action
        this._store.dispatch(new ShippingActions.UpdateRoutes({
            nextRoute: definedRoutes.confirm,
            previousRoute: definedRoutes.weight
        }));

        // Dispatch UPDATE_STEP action
        this._store.dispatch(new ShippingActions.UpdateStep(ProgressSteps.option));


        this._submitformSubscription = this._routeChannelService.shippingDataUpdateBus$.subscribe(formData => {
            this._routeChannelService.updateStore(ProgressSteps.option, this._optionForm);
        });

        // update formstate using formValidation bus   
        // this._optionForm.valueChanges.subscribe(data => {
        //     this._routeChannelService.formValidation$.next(data.weight <= 0);
        // });
    }

    ngAfterViewInit() {
        // pre-populate sender's address
        this.prePopulateForm();
    }

    private prePopulateForm() {
        this._shippingLabelSubscription = this._store.select('shippingLabel').take(1).subscribe((data: IShippingLabelState) => {
            setTimeout(() => {
                this.shippingOption = data.shippingOption === ShippingOption.Ground ? 'ground' : 'prority';
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