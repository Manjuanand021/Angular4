// import core libs
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

// import models
import { IAppState } from '../../models/appState';

@Component({
    selector: 'sh-footer',
    template: require('./footer.template.html')
})

export default class FooterComponent implements OnInit {
    _shippingLabelState: Observable<IAppState>;
    constructor(private _store: Store<any>) { }

    ngOnInit() {
        this._shippingLabelState = this._store.select('shippingLabel');
        this._shippingLabelState.subscribe(data => {
            console.log(data.nextRoute);
        });
    }
}
