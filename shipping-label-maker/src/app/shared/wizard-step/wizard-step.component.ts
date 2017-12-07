import { Component, OnInit, ViewChild, ContentChildren, QueryList } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
    selector: 'sh-wz-step',
    templateUrl: './wizard-step.template.html'
})

export class WizardStepComponent implements OnInit {
    @ContentChildren(NgModel) models: QueryList<NgModel>;
    constructor() { }

    ngOnInit() { }
}