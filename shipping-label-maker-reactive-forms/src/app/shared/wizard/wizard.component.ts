import {
    Component,
    OnInit,
    Input,
    ContentChild,
    EventEmitter,
    Output,
    ContentChildren,
    QueryList,
    ViewChild,
    ChangeDetectionStrategy,
    OnChanges,
    AfterContentChecked,
    ChangeDetectorRef
} from '@angular/core';
import { WizardAction } from '../models/wz-action';
import { WizardStepComponent } from "./wizard-step/wizard-step.component";
import { NgModel, NgForm } from '@angular/forms';
import FormControls from '../services/form-controls.service';
import { Subscription } from "rxjs/Subscription";
import { AfterContentInit } from '@angular/core';
import { WizardBase } from './wizard.base';

let instance = 0;

@Component({
    selector: 'sh-wizard',
    templateUrl: './wizard.template.html'
    //Think about this - how to use OnPush and still internal state change should trigger change detection
    // changeDetection: ChangeDetectionStrategy.OnPush
})

export class WizardComponent extends WizardBase implements OnChanges, OnInit, AfterContentChecked {
    @Output('step-change') stepChange = new EventEmitter();
    constructor() {
        super();
        instance++;
    }

    ngOnChanges(changes) {
        // console.log('changes in shipping info obj', changes);
    }

    ngOnInit() {
        console.log('sh-wizard', instance);
    }

    ngAfterContentChecked() {

    }

    navigate(action: WizardAction) {
        if (this.parent.valid) {
            // send update wizard context
            this.stepChange.emit(action);
        }
    }
}