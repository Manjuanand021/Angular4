import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { WizardComponent } from './wizard/wizard.component';
import { WizardStepComponent } from './wizard-step/wizard-step.component';
import { FromComponent } from './from/from.component';
import { ToComponent } from './to/to.component';
import { FormButtonComponent } from './form-button/form-button.component';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [WizardComponent, WizardStepComponent, FromComponent, ToComponent],
    declarations: [WizardComponent, WizardStepComponent, FromComponent, ToComponent, FormButtonComponent],
    providers: [],
})
export class WizardModule { }
