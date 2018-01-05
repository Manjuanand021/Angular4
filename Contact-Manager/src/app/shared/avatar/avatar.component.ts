import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from "@angular/core";

@Component({
  selector: "cm-avatar",
  templateUrl: "./avatar.template.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarComponent implements OnInit {
  @Input() url: string;
  @Input("is-contact-details") isContactDetails: Boolean;
  constructor() {}

  ngOnInit() {}
}
