import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormInputComponent } from './form-input/form-input.component';
import { FormSelectComponent } from './form-select/form-select.component';
import { FormButtonComponent } from './form-button/form-button.component';
import { DinamicFieldDirective } from './dynamic-field/dinamic-field.directive';
import { DynamicFormComponent } from './dynamic-form.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [DynamicFormComponent],
    providers: [],
    declarations: [
        DynamicFormComponent,
        FormInputComponent,
        FormSelectComponent,
        FormButtonComponent,
        DinamicFieldDirective],
    entryComponents: [
        FormInputComponent,
        FormSelectComponent,
        FormButtonComponent,
    ]
})
export default class DynamicFomrsModule {

}
