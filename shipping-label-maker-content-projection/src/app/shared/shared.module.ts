import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WizardComponent } from './wizard/wizard.component';
import { WizardStepComponent } from './wizard-step/wizard-step.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    declarations: [
        WizardComponent,
        WizardStepComponent,
        HeaderComponent,
        FooterComponent
    ],
    exports: [
        WizardComponent,
        WizardStepComponent
    ]
})
export default class SharedModule {

};

