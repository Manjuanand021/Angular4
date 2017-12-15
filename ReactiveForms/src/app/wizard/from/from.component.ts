import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FromComponent implements OnInit {
  @Input()
  parent: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
