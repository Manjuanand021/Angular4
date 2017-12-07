import {
    Component,
    OnInit,
    Input,
    ContentChild,
    EventEmitter,
    Output,
    AfterContentInit,
    ContentChildren,
    QueryList,
    ViewChild,
    ChangeDetectionStrategy
} from '@angular/core';
import { IShState } from '../../models/ShState';
import { WizardAction } from '../models/wz-action';
import { WizardStepComponent } from "../wizard-step/wizard-step.component";
import { NgModel, NgForm } from '@angular/forms';

@Component({
    selector: 'sh-wizard',
    templateUrl: './wizard.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class WizardComponent implements OnInit, AfterContentInit {
    @ContentChild(WizardStepComponent) stepComponent: WizardStepComponent;
    @Input('shipping-info') wizardContent: IShState;
    @Output('step-change') stepChange = new EventEmitter();
    @ViewChild('wzForm') wzForm: NgForm;

    constructor() { }

    ngOnInit() {
    }

    ngAfterContentInit() {
        //Add the ngModel controls to the form
        const ngContentModels = this.stepComponent.models.toArray();
        ngContentModels.forEach((model) => {
            this.wzForm.addControl(model);
        });
    }

    navigate(action: WizardAction) {
        if (this.wzForm.valid) {
            // send update wizard context
            this.stepChange.emit({
                context: this.wzForm,
                action: action
            });
        }
    }
}