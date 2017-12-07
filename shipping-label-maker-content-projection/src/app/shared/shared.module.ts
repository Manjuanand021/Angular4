import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WizardComponent } from './wizard/wizard.component';
import { WizardStepComponent } from './wizard-step/wizard-step.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';

import FormControls from './services/form-controls.service';

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
    ],
    providers: [FormControls]
})
export default class SharedModule {

};

