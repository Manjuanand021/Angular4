import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'dnm-form',
    templateUrl: 'dynamic-form.template.html',
    styleUrls: ['./dynamic-form.style.css']
})

export class DynamicFormComponent implements OnInit {
    @Input()
    config: any[] = [];

    @Output()
    submitted: EventEmitter<any> = new EventEmitter<any>();

    form: FormGroup;
    constructor(private _fb: FormBuilder) { }

    ngOnInit() {
        this.form = this.createGroup();
    }

    createGroup() {
        const group = this._fb.group({});
        this.config.forEach(ctrl => {
            group.addControl(ctrl.name, this._fb.control(''));
        });
        return group;
    }
}
