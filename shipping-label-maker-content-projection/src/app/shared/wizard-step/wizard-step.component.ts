import { Component, OnInit, ViewChild, ContentChildren, QueryList, Output, EventEmitter, AfterContentInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import FormControls from '../services/form-controls.service';

let instance = 0;

@Component({
    selector: 'sh-wz-step',
    templateUrl: './wizard-step.template.html'
})

export class WizardStepComponent implements OnInit, AfterContentInit {
    @ContentChildren(NgModel) private _models: QueryList<NgModel>;
    constructor(private formCtrlService: FormControls) {
        instance++;
    }

    ngOnInit() {
        console.log('sh-wz-step', instance);
    }

    ngAfterContentInit() {
        console.log('pushing next set of controls');
        this.formCtrlService.formControls$.next(this._models);
    }
}