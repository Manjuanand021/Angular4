import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

// import actions and reducers
import * as ShippingActions from '../../store/shipping.actions';
import { IAppState } from '../../models/appState';
import { ProgressSteps } from '../../models/progress-step';
import { IShippingLabelState } from '../../models/shippingLableState';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'sh-label',
  templateUrl: './shipping-label.template.html'
})
export default class ShipingLabelComponent implements OnInit, OnDestroy {
  _shippingDataSubscription: Subscription;
  todayDate: any = {};
  shippingData: IShippingLabelState;
  constructor(private _store: Store<IAppState>) { }

  ngOnInit() {
    // Dispatch UPDATE_STEP action
    this._store.dispatch(new ShippingActions.UpdateStep(ProgressSteps.label));

    // Subscribe to shippingLabel data
    this._shippingDataSubscription = this._store.select('shippingLabel').subscribe((data: IShippingLabelState) => {
      this.shippingData = data;
    });

    // get today's date
    const dt = new Date(),
      locale = 'en-us',
      month = dt.toLocaleString(locale, { month: 'long' });
    this.todayDate = {
      day: dt.getDate(),
      month: month,
      year: dt.getFullYear()
    };
  }

  ngOnDestroy() {
    this._shippingDataSubscription.unsubscribe();
  }
}
