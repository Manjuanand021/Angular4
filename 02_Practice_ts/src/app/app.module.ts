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
// import {
//     BrowserAnimationsModule
// } from '@angular/platform-browser/animations'
// import {
//     trigger,
//     state,
//     style
// } from '@angular/animations';
import {
    StoreModule
} from '@ngrx/store';

// Import feature modules
import ShippingModule from './features/feaure.module';

// Import Components
import AppComponent from './root/app.component';
import PageNotFoundErrorComponent from './pagenotfound/pagenotfound.component';

// Import services

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
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
