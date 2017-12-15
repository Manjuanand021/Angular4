import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { StepsBase } from '../steps.base';

@Component({
  selector: 'app-weight',
  templateUrl: './weight.template.html',
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class WeightComponent extends StepsBase implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
