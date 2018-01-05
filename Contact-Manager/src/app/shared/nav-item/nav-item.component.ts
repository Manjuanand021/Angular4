import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "cm-nav-item",
  templateUrl: "./nav-item.template.html"
})
export class NavItemComponent implements OnInit {
  @Input("nav-link") navLink: string;
  constructor() {}

  ngOnInit() {}
}
