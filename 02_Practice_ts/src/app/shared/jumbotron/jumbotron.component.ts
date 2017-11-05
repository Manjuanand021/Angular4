import {
  Component,
  Input
} from "@angular/core";

@Component({
  selector: "jumbotron",
  template: './jumbotron.template.html'
})
export default class JumbotronComponent {
  @Input('header') header;
  @Input('sub-header') subHeader;
  @Input('lead') lead;
  @Input('gradient-class') gradientClass;
  constructor() { }
}