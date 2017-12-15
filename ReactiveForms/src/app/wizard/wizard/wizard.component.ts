import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit {
  @Input()
  parent: FormGroup;

  @Output()
  hideOrShow = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('submitted form', this.parent);
    this.hideOrShow.emit(false);
  }
}
