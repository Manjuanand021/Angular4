// Import core modules
import {
    NgModule
} from '@angular/core';
import {
    BrowserModule
} from '@angular/platform-browser';
import {
    FormsModule
} from '@angular/forms';
import {
    HttpClientModule
} from '@angular/common/http';
import {
    StoreModule
} from '@ngrx/store';

// Import feature modules
import ShippingModule from './features/feaure.module';

// Import Components
import AppComponent from './root/app.component';

// Import services
import RouteChannelService from './services/route-channel.service';

// Import reducers
import { reducers } from './models/appState';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ShippingModule,
        StoreModule.forRoot(reducers)
    ],
    providers: [RouteChannelService],
    bootstrap: [AppComponent]
})
export class AppModule { }
