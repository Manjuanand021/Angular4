//Import core modules
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

// Import modules
import AppRoutingModule from '../app.routing';

// Import components
import HeaderComponent from './header/header.component';
import FooterComponent from './footer/footer.component';

// Import services

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    exports: [
        HeaderComponent
        // FooterComponent
    ]
})
export default class CoreModule { }