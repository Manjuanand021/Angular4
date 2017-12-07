import { Component, OnInit } from '@angular/core';
import { IAddress } from '../../../models/address';

@Component({
    selector: 'sh-to',
    templateUrl: 'sh-to.template.html'
})

export class ShToComponent implements OnInit {
    to: IAddress;

    constructor() { }

    ngOnInit() { }
}