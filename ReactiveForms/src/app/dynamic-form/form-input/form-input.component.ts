import { Component, OnInit } from '@angular/core';
import { FormControlBase } from '../form-control';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent extends FormControlBase implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
