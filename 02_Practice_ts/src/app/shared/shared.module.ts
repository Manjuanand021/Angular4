// import core libs
import { NgModule } from '@angular/core';

// import components
import WizardComponent from './wizard/wizard.component';
import HeaderComponent from './header/header.component';

@NgModule({
    imports: [
    ],
    declarations: [
        WizardComponent,
        HeaderComponent],
    exports: [
        WizardComponent
    ],
    providers: [],
})
export default class SharedModule {

};

