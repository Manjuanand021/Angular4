// import core libs
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import feature modules
import SharedModule from '../shared/shared.module';

// import components
import ShippingLabelMakerComponent from './shipping-label-maker/shipping-label-maker.component';
import LoginComponent from './login/login.component';

@NgModule({

    imports: [
        BrowserModule,
        SharedModule
    ],
    exports: [
        LoginComponent,
        ShippingLabelMakerComponent
    ],
    declarations: [
        LoginComponent,
        ShippingLabelMakerComponent
    ],
    providers: [],
})
export default class ShippingModule { }
