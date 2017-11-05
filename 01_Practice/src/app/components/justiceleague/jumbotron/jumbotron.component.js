import {
  Component,
  Input
} from "@angular/core";
import template from "./jumbotron.template.html";

@Component({
  selector: "jumbotron",
  template: template
})
export default class JumbotronComponent {
  @Input('header') header;
  @Input('sub-header') subHeader;
  @Input('lead') lead;
  @Input('gradient-class') gradientClass;
  constructor() {}
}