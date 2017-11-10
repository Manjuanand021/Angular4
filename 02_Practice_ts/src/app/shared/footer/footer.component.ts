// import core libs
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Router } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

// import models
import { IAppState } from '../../models/appState';
import { IShippingLabelState } from '../../models/shippingLableState';


@Component({
    selector: 'sh-footer',
    template: require('./footer.template.html')
})

export default class FooterComponent implements OnInit {
    // private variables
    private shippingLabelState: Observable<IShippingLabelState>;
    private _shippingLableSubscription: Subscription;

    // public vadiables

    constructor(private _store: Store<IAppState>, private _router: Router) { }

    ngOnInit() {
        this.shippingLabelState = this._store.select('shippingLabel');
    }
}
