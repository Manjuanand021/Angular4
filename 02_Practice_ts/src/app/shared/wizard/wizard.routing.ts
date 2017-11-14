// import core libs
import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

// import components
import SenderAddressComponent from '../sender-address/sender-address.component';
import ReceiverAddressComponent from '../receiver-address/receiver-address.component';
import QuantityComponent from '../quantity/quantity.component';
import ConfirmComponent from '../confirm/confirm.component';
import ShipingLabelComponent from '../shipping-label/shipping-label.component';


// import json
const definedRoutes = require('../../data/routes.json');

// Routes
const routes: Routes = [
    {
        path: definedRoutes.sender,
        component: SenderAddressComponent
    },
    {
        path: definedRoutes.receiver,
        component: ReceiverAddressComponent
    },
    {
        path: definedRoutes.quantity,
        component: QuantityComponent
    },
    {
        path: definedRoutes.confirm,
        component: ConfirmComponent
    },
    {
        path: definedRoutes.label,
        component: ShipingLabelComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: `/${definedRoutes.sender}`
    }
    //Catch all route
    // {
    //     path: '**',
    //     redirectTo: '/not-found'
    // }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export default class WizardRoutingModule {

};

