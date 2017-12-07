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
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Import feature modules
import { FeaturesModule } from './features/feature.module';

// Import Components
import AppComponent from './root/app.component';

// Import reducers and effects

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        FeaturesModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
