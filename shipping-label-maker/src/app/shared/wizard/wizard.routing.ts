// import core libs
import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

// import components
import SenderAddressComponent from '../sender-address/sender-address.component';
import ReceiverAddressComponent from '../receiver-address/receiver-address.component';
import WeightComponent from '../weight/weight.component';
import ConfirmComponent from '../confirm/confirm.component';
import ShipingLabelComponent from '../shipping-label/shipping-label.component';


// import json
import * as customRoutes from '../../data/routes.json';
const definedRoutes = <any>customRoutes;

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
        path: definedRoutes.weight,
        component: WeightComponent
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

