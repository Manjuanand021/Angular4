// import core libs
import { NgModule } from '@angular/core';

// import components
import WizardComponent from './wizard/wizard.component';
import HeaderComponent from './header/header.component';
import FooterComponent from './footer/footer.component';

@NgModule({
    imports: [
    ],
    declarations: [
        WizardComponent,
        HeaderComponent,
        FooterComponent
    ],
    exports: [
        WizardComponent
    ],
    providers: [],
})
export default class SharedModule {

};

