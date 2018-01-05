import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "cm-display-item",
  templateUrl: "./display-item.template.html"
})
export class DisplayItemComponent implements OnInit {
  @Input() label: string;
  @Input() value: string;
  @Input() editing: boolean;
  constructor() {}

  ngOnInit() {}
}
