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
    ChangeDetectionStrategy,
    OnChanges,
    AfterContentChecked,
    OnDestroy
} from '@angular/core';
import { IShState } from '../../models/ShState';
import { WizardAction } from '../models/wz-action';
import { WizardStepComponent } from "../wizard-step/wizard-step.component";
import { NgModel, NgForm } from '@angular/forms';
import FormControls from '../services/form-controls.service';
import { Subscription } from "rxjs/Subscription";

let instance = 0;

@Component({
    selector: 'sh-wizard',
    templateUrl: './wizard.template.html',
    //Think about this - how to use OnPush and still internal state change should trigger change detection
    changeDetection: ChangeDetectionStrategy.Default
})

export class WizardComponent implements OnChanges, OnInit, AfterContentInit, AfterContentChecked, OnDestroy {
    @ContentChild(WizardStepComponent) stepComponent: WizardStepComponent;
    @Input('shipping-info') wizardContent: IShState;
    @Output('step-change') stepChange = new EventEmitter();
    @ViewChild('wzForm') wzForm: NgForm;
    formState: boolean;
    formCtrlsSubscription: Subscription;
    constructor(private formCtrlService: FormControls) {
        instance++;
    }

    ngOnChanges(changes) {
        console.log('changes in shipping info obj', changes);
    }

    ngOnInit() {
        console.log('sh-wizard', instance);
        this.formCtrlsSubscription = this.formCtrlService.formControls$.subscribe((ngmodels: any) => {
            ngmodels.forEach((model) => {
                this.wzForm.addControl(model);
            });
            // this.wzForm.form
            console.log('form', this.wzForm);
        });
    }

    ngAfterContentInit() {
        //Add the ngModel controls to the form
        // const ngContentModels = this.stepComponent.models.toArray();
        // ngContentModels.forEach((model) => {
        //     this.wzForm.addControl(model);
        // });
    }

    // addControlsToForm(controls) {
    //     controls.forEach((model) => {
    //         this.wzForm.addControl(model);
    //     });

    //     console.log('added controls', this.wzForm);
    // }

    ngAfterContentChecked() {
        //set formState to invalid and disable navigation buttons
        this.formState = this.wzForm.valid;
        // console.log('checked', this.wzForm);
    }

    navigate(action: WizardAction) {
        if (this.wzForm.valid) {
            // send update wizard context
            this.stepChange.emit({
                context: this.wzForm,
                action: action
            });
            // this.wzForm = new NgForm();
        }
    }

    ngOnDestroy() {
        this.formCtrlsSubscription.unsubscribe();
    }
}