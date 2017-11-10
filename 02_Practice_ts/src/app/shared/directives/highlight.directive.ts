// import core libs
import { Directive, OnInit, Renderer2 } from '@angular/core';
import { Store } from "@ngrx/store";
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

// import models
import { IAppState } from '../../models/appState';
import { IShippingLabelState } from '../../models/shippingLableState';

// import actions and reducers
import * as ShippingActions from '../../store/shipping.actions';

@Directive({
    selector: '[highlight]'
})
export class HighLightDirective implements OnInit {
    private shippingLabelState: Observable<IShippingLabelState>;
    private _shippingLabelSubscription: Subscription;
    constructor(private _store: Store<IAppState>, private _renderer: Renderer2) { }

    ngOnInit() {
        this._shippingLabelSubscription = this._store.select('shippingLabel').subscribe(data => {
            // this
        });
    }
}