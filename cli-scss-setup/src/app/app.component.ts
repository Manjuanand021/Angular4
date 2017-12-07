import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/observable/dom/ajax';
import { map, catchError } from 'rxjs/operators';


interface Person {
  name: string;
  age: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    const abc = {
      age1: 30,
      name: 'Manjuanand'
    };
    console.log(this.isPerson(abc));
  }

  isPerson(value: any): value is Person {
    return value &&
      (typeof value.name === 'string') &&
      (typeof value.age === 'number');
  }
}
