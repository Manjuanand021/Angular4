import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IAddress } from '../../../models/address';
import Address from '../../../models/address';

@Component({
    selector: 'sh-from',
    templateUrl: 'sh-from.template.html'
})

export class ShFromComponent implements OnInit {
    // @ViewChild('address') _addressForm: NgForm;
    from: IAddress;
    constructor() { }

    ngOnInit() {
        this.from = new Address();
    }
}