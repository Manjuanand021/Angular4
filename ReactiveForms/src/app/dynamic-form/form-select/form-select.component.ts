import { Component, OnInit } from '@angular/core';
import { CustomControl } from '../form-control';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.css']
})
export class FormSelectComponent extends CustomControl implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {
  }

}
