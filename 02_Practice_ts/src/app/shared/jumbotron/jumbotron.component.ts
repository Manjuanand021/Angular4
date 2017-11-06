import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'jumbotron',
  template: './jumbotron.template.html'
})
export default class JumbotronComponent {
  @Input('header') header: any;
  @Input('sub-header') subHeader: any;
  @Input('lead') lead: any;
  @Input('gradient-class') gradientClass: any;
  constructor() { }
}
