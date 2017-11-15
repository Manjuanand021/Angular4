// import core libs
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

// import models
import { IAppState } from '../../models/appState';
import { IShippingLabelState } from '../../models/shippingLableState';
import { ProgressSteps } from '../../models/progress-step';

// import services
import RouteChannelService from '../services/route-channel.service';


@Component({
    selector: 'sh-footer',
    templateUrl: './footer.template.html'
})

export default class FooterComponent implements OnInit {
    // private variables
    private shippingLabelState: Observable<IShippingLabelState>;
    private _nxtRoute: string;
    private _prevRoute: string;
    showGenerateLblBtn: boolean;
    showNavButtons: boolean;
    showNextBtn: boolean;
    showPreviousBtn: boolean;
    isValidForm: boolean;
    constructor(private _store: Store<IAppState>,
        private _router: Router,
        private _currentRoute: ActivatedRoute,
        private _routeChannelService: RouteChannelService) {

    }

    ngOnInit() {
        this.shippingLabelState = this._store.select('shippingLabel');
        this.shippingLabelState.subscribe(data => {
            this._nxtRoute = data.nextRoute;
            this._prevRoute = data.previousRoute;

            // show generate label button only in shipping-label step
            this.showGenerateLblBtn = data.currentStep === ProgressSteps.confirm;

            // show previous button in all the steps except first and shipping-label step
            this.showPreviousBtn = data.currentStep !== ProgressSteps.sender

            // show previous button in all the steps cofnim and shipping-label step
            this.showNextBtn = data.currentStep !== ProgressSteps.confirm

            // if current step is shipping-label then hide all the buttons
            this.showNavButtons = data.currentStep !== ProgressSteps.label;
        });

        // subscribe to form validation bus
        this._routeChannelService.formValidation$.subscribe((formState: boolean) => {
            this.isValidForm = formState;
        });
    }

    navigate(previous: boolean) {
        // Dispatch an event which will later updates store and navigate
        this._routeChannelService.navigate();

        // Navigate to next/previous route
        const route = previous ? this._prevRoute : this._nxtRoute;
        this._router.navigate([route],
            { relativeTo: this._currentRoute });
    }
}
