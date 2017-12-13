import { Component, OnInit } from '@angular/core';
import { FormControlBase } from '../form-control';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.css']
})
export class FormSelectComponent extends FormControlBase implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
