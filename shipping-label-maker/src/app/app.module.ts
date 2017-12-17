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

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Import feature modules
import ShippingModule from './features/feaure.module';

// Import Components
import AppComponent from './root/app.component';


// Import reducers
import { reducers } from './store/app.reduce';
import { environment } from '../environments/environment.prod';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ShippingModule,
        StoreModule.forRoot(reducers),
        StoreDevtoolsModule.instrument({
            maxAge: 10
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
