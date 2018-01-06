import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "cm-display-item",
  templateUrl: "./display-item.template.html"
})
export class DisplayItemComponent implements OnInit {
  @Input() parent: FormGroup;
  @Input() label: string;
  @Input() value: string;
  @Input() editing: boolean;
  constructor() {}

  ngOnInit() {}
}
