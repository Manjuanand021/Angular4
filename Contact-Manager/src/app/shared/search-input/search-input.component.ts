import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "cm-srh-input",
  templateUrl: "search-input.template.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchInputComponent implements OnInit {
  srchActive: boolean;
  constructor() {}

  ngOnInit() {}
}
