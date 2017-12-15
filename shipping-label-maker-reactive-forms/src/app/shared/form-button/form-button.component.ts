import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-form-button',
  template: `
    <p>
      form-button works!
    </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class FormButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
