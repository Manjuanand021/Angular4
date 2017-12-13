import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import DynamicFomrsModule from './dynamic-form/dynamic-form.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicFomrsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
