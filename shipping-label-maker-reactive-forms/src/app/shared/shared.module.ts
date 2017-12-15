import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { WizardComponent } from './wizard/wizard.component';
import { WizardStepComponent } from './wizard/wizard-step/wizard-step.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormButtonComponent } from './form-button/form-button.component';


@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule
    ],
    declarations: [
        WizardComponent,
        WizardStepComponent,
        HeaderComponent,
        FooterComponent,
        FormButtonComponent
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        WizardComponent,
        WizardStepComponent
    ],
    providers: []
})
export default class SharedModule {

};

