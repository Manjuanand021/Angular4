import {
  Directive,
  Input,
  ViewContainerRef,
  ComponentFactoryResolver
} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormInputComponent } from '../form-input/form-input.component';
import { FormSelectComponent } from '../form-select/form-select.component';
import { FormButtonComponent } from '../form-button/form-button.component';
import { OnInit } from '@angular/core';

const components = {
  button: FormButtonComponent,
  input: FormInputComponent,
  select: FormSelectComponent
};

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[dynamic-field]'
})
export class DynamicFieldDirective implements OnInit {
  @Input()
  config;

  @Input()
  group: FormGroup;

  component;

  constructor(private _vcRef: ViewContainerRef, private _resolver: ComponentFactoryResolver) { }

  ngOnInit() {
    const component = components[this.config.type];
    const factory = this._resolver.resolveComponentFactory<any>(component);
    this.component = this._vcRef.createComponent(factory);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
  }

}
