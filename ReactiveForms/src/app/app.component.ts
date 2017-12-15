import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Reactive forms tutorial';
  config: any[] = [];
  wzForm: FormGroup;
  showFrom = true;
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.config = [
      {
        type: 'input',
        label: 'Full name',
        name: 'name',
        placeholder: 'Enter your name'
      },
      {
        type: 'select',
        label: 'Favourite food',
        name: 'food',
        options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
        placeholder: 'Select an option'
      },
      {
        label: 'Submit',
        name: 'submit',
        type: 'button'
      }
    ];
    this.wzForm = this._fb.group({
      from: this._fb.group({
        name: this._fb.control(''),
        street: this._fb.control(''),
        city: this._fb.control(''),
        state: this._fb.control(''),
        zip: this._fb.control('')
      }),
      to: this._fb.group({
        name: this._fb.control(''),
        street: this._fb.control(''),
        city: this._fb.control(''),
        state: this._fb.control(''),
        zip: this._fb.control('')
      })
    });
  }

  formSubmitted(form) {
    console.log('form', form);
  }

  hideOrShow(flag) {
    console.log('flag', flag);
    this.showFrom = flag;
  }
}
