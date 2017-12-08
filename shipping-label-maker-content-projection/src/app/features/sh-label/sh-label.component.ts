import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'sh-label',
    templateUrl: 'sh-label.template.html'
})

export class ShLabelComponent implements OnInit {
    @Input('shipping-info') shippingInfo;

    constructor() { }

    ngOnInit() { }

}