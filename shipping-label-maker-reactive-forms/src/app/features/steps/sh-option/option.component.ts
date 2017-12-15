import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { StepsBase } from '../steps.base';

@Component({
  selector: 'app-option',
  templateUrl: './option.template.html',
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class OptionComponent extends StepsBase implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
