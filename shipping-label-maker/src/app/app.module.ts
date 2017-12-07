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


// Import reducers
import { reducers } from './store/app.reduce';


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
