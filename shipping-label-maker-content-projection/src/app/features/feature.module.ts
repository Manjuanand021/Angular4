import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import SharedModule from '../shared/shared.module';
import { ShMakerComponent } from './sh-maker/sh-maker.component';
import { ShFromComponent } from './steps/sh-from/sh-from.component';
import { ShToComponent } from './steps/sh-to/sh-to.component'
import { ShLabelComponent } from './sh-label/sh-label.component';

import ShUtilityService from './services/sh-utility.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule
    ],
    declarations: [
        ShMakerComponent,
        ShFromComponent,
        ShToComponent,
        ShLabelComponent
    ],
    exports: [
        CommonModule,
        ShMakerComponent
    ],
    providers: [ShUtilityService]
})
export class FeaturesModule {
};


