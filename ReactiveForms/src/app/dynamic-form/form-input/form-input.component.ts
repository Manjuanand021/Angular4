import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CustomControl } from '../form-control';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent extends CustomControl implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {
  }

}
