import { Component, OnInit } from '@angular/core';
import { CustomControl } from '../form-control';

@Component({
  selector: 'app-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.css']
})
export class FormButtonComponent extends CustomControl implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {
  }

}
