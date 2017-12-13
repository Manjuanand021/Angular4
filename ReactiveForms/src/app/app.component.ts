import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Reactive forms tutorial';
  config: any[] = [];
  constructor() { }

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
  }

  formSubmitted(form) {
    console.log('form', form);
  }
}
