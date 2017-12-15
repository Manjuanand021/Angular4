import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IAddress } from '../../contracts/address.interface';
import { Address } from '../../models/address.model';
import { StepsBase } from '../steps.base';

@Component({
    selector: 'sh-from',
    templateUrl: 'sh-from.template.html'
    // since this is dumb component, I have set ChangeDetectionStrategy strategy to OnPush
    // changeDetection: ChangeDetectionStrategy.OnPush
})

export class ShFromComponent extends StepsBase implements OnInit {
    // @ViewChild('address') _addressForm: NgForm;
    // from: IAddress;
    constructor() {
        super();
    }

    ngOnInit() {
        // this.from = new Address();
    }
}