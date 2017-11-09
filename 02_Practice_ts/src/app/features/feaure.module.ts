// import core libs
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import feature modules
import SharedModule from '../shared/shared.module';

// import components
import ShippingLabelMakerComponent from './shipping-label-maker/shipping-label-maker.component';
import ShippingLabelComponent from './shipping-label/shipping-label.component';

@NgModule({
    imports: [
        BrowserModule,
        SharedModule
    ],
    exports: [
        ShippingLabelMakerComponent,
        ShippingLabelComponent
    ],
    declarations: [
        ShippingLabelMakerComponent,
        ShippingLabelComponent
    ],
    providers: [],
})
export default class ShippingModule { }
