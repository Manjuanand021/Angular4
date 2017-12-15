import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IAddress } from '../../contracts/address.interface';
import { StepsBase } from '../steps.base';

@Component({
    selector: 'sh-to',
    templateUrl: 'sh-to.template.html'
    // since this is dumb component, I have set ChangeDetectionStrategy strategy to OnPush
    // changeDetection: ChangeDetectionStrategy.OnPush
})

export class ShToComponent extends StepsBase implements OnInit {
    // to: IAddress;
    constructor() {
        super();
    }

    ngOnInit() { }
}