import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  @Input()
  config: any[] = [];

  dnmForm: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.dnmForm = this.createFormGroup();
  }

  private createFormGroup() {
    const group = this._fb.group({});
    this.config.forEach(control => {
      group.addControl(control.name, this._fb.control(''));
    });
    return group;
  }
}
