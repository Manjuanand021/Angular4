import {
    Component,
    OnInit,
    ViewChild,
    ContentChildren,
    QueryList,
    Output,
    EventEmitter,
    AfterContentInit
} from '@angular/core';
import {
    NgForm,
    NgModel
} from '@angular/forms';
import { WizardBase } from '../wizard.base';

let instance = 0;

@Component({
    selector: 'sh-wz-step',
    templateUrl: './wizard-step.template.html'
})

export class WizardStepComponent extends WizardBase implements OnInit, AfterContentInit {
    constructor() {
        super();
        instance++;
    }

    ngOnInit() {
        console.log('sh-wz-step', instance);
    }

    ngAfterContentInit() {

    }
}