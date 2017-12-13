import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignUpComponent } from './signup/signup.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { FormInputComponent } from './dynamic-form/form-input/form-input.component';
import { FormSelectComponent } from './dynamic-form/form-select/form-select.component';
import { FormButtonComponent } from './dynamic-form/form-button/form-button.component';
import { DynamicFieldDirective } from './dynamic-form/dynamic-field/dynamic-field.directive';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    DynamicFormComponent,
    DynamicFieldDirective,
    FormInputComponent,
    FormSelectComponent,
    FormButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    FormInputComponent,
    FormSelectComponent,
    FormButtonComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
