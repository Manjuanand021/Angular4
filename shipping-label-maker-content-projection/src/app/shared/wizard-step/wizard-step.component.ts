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
import FormControls from '../services/form-controls.service';

let instance = 0;

@Component({
    selector: 'sh-wz-step',
    templateUrl: './wizard-step.template.html'
})

export class WizardStepComponent implements OnInit, AfterContentInit {
    @ContentChildren(NgModel) private _models: QueryList<NgModel>;
    @ViewChild('wzstpForm') wzstpForm: NgForm;

    constructor() {
        instance++;
    }

    ngOnInit() {
        console.log('sh-wz-step', instance);
    }

    ngAfterContentInit() {
        // !! converts a truthy expression to its respecitve boolena value
        if (!!this._models) {
            const ngModelControls = this._models.forEach(model => {
                this.wzstpForm.addControl(model);
            });
        }
    }
}