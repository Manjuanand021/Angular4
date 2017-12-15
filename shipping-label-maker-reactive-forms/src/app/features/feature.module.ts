import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import SharedModule from '../shared/shared.module';
import { ShMakerComponent } from './sh-maker/sh-maker.component';
import { ShFromComponent } from './steps/sh-from/sh-from.component';
import { ShToComponent } from './steps/sh-to/sh-to.component'
import { WeightComponent } from './steps/sh-weight/weight.component';
import { OptionComponent } from './steps/sh-option/option.component';
import { ShPreviewComponent } from './preview/preview.component';
import { ShLabelComponent } from './sh-label/sh-label.component';

import ShUtilityService from './services/sh-utility.service';


@NgModule({
    imports: [
        CommonModule,
        // FormsModule,
        // ReactiveFormsModule,
        SharedModule
    ],
    declarations: [
        ShMakerComponent,
        ShFromComponent,
        ShToComponent,
        WeightComponent,
        OptionComponent,
        ShPreviewComponent,
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


