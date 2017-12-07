import { Component, OnInit } from '@angular/core';
let instance = 0;
@Component({
    // tslint:disable-next-line:component-selector
    selector: 'counter',
    templateUrl: 'counter.template.html'
})

export class CounterComponent implements OnInit {
    id: number;
    constructor() {
        this.id = ++instance;
    }

    ngOnInit() { }
}
