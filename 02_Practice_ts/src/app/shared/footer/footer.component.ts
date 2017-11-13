// import core libs
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

// import models
import { IAppState } from '../../models/appState';
import { IShippingLabelState } from '../../models/shippingLableState';

// import services
import RouteChannelService from '../../services/route-channel.service';


@Component({
    selector: 'sh-footer',
    template: require('./footer.template.html')
})

export default class FooterComponent implements OnInit {
    // private variables
    private shippingLabelState: Observable<IShippingLabelState>;
    private _nxtRoute: string;
    private _prevRoute: string;

    constructor(private _store: Store<IAppState>,
        private _router: Router,
        private _currentRoute: ActivatedRoute,
        private _routeChannelService: RouteChannelService) { }

    ngOnInit() {
        this.shippingLabelState = this._store.select('shippingLabel');
        this.shippingLabelState.subscribe(data => {
            this._nxtRoute = data.nextRoute;
            this._prevRoute = data.previousRoute;
        });
    }

    navigate(previous: boolean) {
        // Dispatch an event which will later update store and navigate
        this._routeChannelService.navigate();
        // Navigate to next/previous route
        const route = previous ? this._prevRoute : this._nxtRoute;
        this._router.navigate([route],
            { relativeTo: this._currentRoute });
    }
}
