import { Directive, Input, ViewContainerRef, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormInputComponent } from '../form-input/form-input.component';
import { FormSelectComponent } from '../form-select/form-select.component';
import { FormButtonComponent } from '../form-button/form-button.component';

const components = {
  input: FormInputComponent,
  select: FormSelectComponent,
  button: FormButtonComponent
};

@Directive({
  selector: '[appDinamicField]'
})
export class DinamicFieldDirective implements OnInit {
  @Input()
  config;
  @Input()
  group;

  constructor(private _vcRef: ViewContainerRef, private _resolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this._vcRef.clear();
    const component = components[this.config.type];
    const factory = this._resolver.resolveComponentFactory<any>(component);
    const componentRef = this._vcRef.createComponent(factory);
    componentRef.instance.group = this.group;
    componentRef.instance.config = this.config;
  }
}
