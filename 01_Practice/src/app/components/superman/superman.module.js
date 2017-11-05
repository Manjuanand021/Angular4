import {
    NgModule
} from '@angular/core';
import {
    CommonModule
} from '@angular/common';

//Import feature modules
import SupermanRoutingModule from "./superman.routing";
import SharedModule from "../shared/shared.module";


//Import components
import SupermanComponent from './superman.component';

@NgModule({
    declarations: [SupermanComponent],
    imports: [
        CommonModule,
        SupermanRoutingModule,
        SharedModule
    ],
    exportS: [SupermanComponent]
})
export default class SupermanModule {

};