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
import { IShState } from '../../models/ShState';
import { WizardAction } from '../models/wz-action';
import { WizardStepComponent } from "../wizard-step/wizard-step.component";
import { NgModel, NgForm } from '@angular/forms';
import FormControls from '../services/form-controls.service';
import { Subscription } from "rxjs/Subscription";
import { AfterContentInit } from '@angular/core';

let instance = 0;

@Component({
    selector: 'sh-wizard',
    templateUrl: './wizard.template.html',
    //Think about this - how to use OnPush and still internal state change should trigger change detection
    changeDetection: ChangeDetectionStrategy.Default
})

export class WizardComponent implements OnChanges, OnInit, AfterContentChecked {
    @ContentChild(WizardStepComponent) _stepComponent: WizardStepComponent;
    @Input('shipping-info') wizardContent: IShState;
    @Output('step-change') stepChange = new EventEmitter();
    formState: boolean;
    constructor() {
        instance++;
    }

    ngOnChanges(changes) {
        // console.log('changes in shipping info obj', changes);
    }

    ngOnInit() {
        console.log('sh-wizard', instance);
    }

    ngAfterContentChecked() {
        //set formState to invalid and disable navigation buttons
        this.formState = this._stepComponent.wzstpForm.valid;
    }

    navigate(action: WizardAction) {
        if (this._stepComponent.wzstpForm.valid) {
            // send update wizard context
            this.stepChange.emit({
                context: this._stepComponent.wzstpForm,
                action: action
            });
        }
    }
}