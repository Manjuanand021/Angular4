import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "cm-btn",
  templateUrl: "button.template.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
