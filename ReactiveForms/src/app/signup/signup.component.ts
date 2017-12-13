import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { User } from './signUp.interface';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'signup-form',
    templateUrl: 'signup.template.html',
    styleUrls: ['./signup.style.css']
})

export class SignUpComponent implements OnInit {
    user: FormGroup;
    constructor(private _fb: FormBuilder) { }

    ngOnInit() {
        // this.user = new FormGroup({
        //     name: new FormControl('', [Validators.required, Validators.minLength(2)]),
        //     account: new FormGroup({
        //         email: new FormControl('', Validators.required),
        //         confirm: new FormControl('', Validators.required)
        //     })
        // });
        this.user = this._fb.group({
            name: this._fb.control('', [Validators.required, Validators.minLength(2)]),
            account: this._fb.group({
                email: this._fb.control('', Validators.required),
                confirm: this._fb.control('', Validators.required)
            })
        });
    }

    // onSubmit({ value, valid }: { value: User, valid: boolean }) {
    onSubmit({ value, valid }: { value: User, valid: boolean }) {
        // console.log('value', value);
        // console.log('valid', valid);
        console.log('value', this.user.value);
        console.log('valid', this.user.valid);
    }
}
