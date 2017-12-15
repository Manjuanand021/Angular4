import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-to',
  templateUrl: './to.component.html',
  styleUrls: ['./to.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToComponent implements OnInit {
  @Input()
  parent: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
