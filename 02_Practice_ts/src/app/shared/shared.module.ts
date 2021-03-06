// import core libs
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// import feature modules
import WizardRoutingModule from './wizard/wizard.routing';


// import components
import WizardComponent from './wizard/wizard.component';
import HeaderComponent from './header/header.component';
import FooterComponent from './footer/footer.component';
import SenderAddressComponent from './sender-address/sender-address.component';
import ReceiverAddressComponent from './receiver-address/receiver-address.component';
import QuantityComponent from './quantity/quantity.component';
import ConfirmComponent from './confirm/confirm.component';
import ShipingLabelComponent from './shipping-label/shipping-label.component';

// import directives
import ProgressBarDirective from './directives/progress-bar.directive';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        WizardRoutingModule
    ],
    declarations: [
        WizardComponent,
        ProgressBarDirective,
        HeaderComponent,
        FooterComponent,
        SenderAddressComponent,
        ReceiverAddressComponent,
        QuantityComponent,
        ConfirmComponent,
        ShipingLabelComponent
    ],
    exports: [
        WizardComponent
    ],
    providers: [],
})
export default class SharedModule {

};

