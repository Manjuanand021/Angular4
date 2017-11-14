// Import core libs
import { Directive, ElementRef, Input, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';

// import models
import { IAppState } from '../../models/appState';



@Directive({ selector: '[pb-step]' })
export default class ProgressBarDirective implements OnInit, OnDestroy {
    private _subscription: Subscription;
    @Input('pb-step') step: Number;
    constructor(private _elementRef: ElementRef, private _store: Store<IAppState>, private _renderer: Renderer2) { }

    ngOnInit() {
        // console.log('element', this._elementRef);
        this._subscription = this._store.select('shippingLabel').subscribe(data => {
            if (data.currentStep >= this.step) {
                this._renderer.addClass(this._elementRef.nativeElement, 'highlight');
            } else {
                this._renderer.removeClass(this._elementRef.nativeElement, 'highlight');
            }
        });
    }

    ngOnDestroy() {
        this._subscription.unsubscribe();
    }
}