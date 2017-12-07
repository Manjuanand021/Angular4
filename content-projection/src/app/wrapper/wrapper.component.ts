import { Component, OnInit, ContentChild, TemplateRef } from '@angular/core';

@Component({
    selector: 'wrapper',
    templateUrl: './wrapper.template.html'
})

export class WrapperComponent implements OnInit {
    @ContentChild(TemplateRef) template: TemplateRef<any>;
    dummyData = [0, 0, 0];
    active = true;
    constructor() { }

    ngOnInit() { }

    showOrHide() {
        this.active = !this.active;
    }
}
