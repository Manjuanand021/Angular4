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
import WeightComponent from './weight/weight.component';
import ConfirmComponent from './confirm/confirm.component';
import ShipingLabelComponent from './shipping-label/shipping-label.component';
import ShippingOptionComponent from './shipping-option/shipping-option.component';

// Import services
import RouteChannelService from './services/route-channel.service';

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
        WeightComponent,
        ConfirmComponent,
        ShippingOptionComponent,
        ShipingLabelComponent
    ],
    exports: [
        WizardComponent
    ],
    providers: [RouteChannelService],
})
export default class SharedModule {

};

