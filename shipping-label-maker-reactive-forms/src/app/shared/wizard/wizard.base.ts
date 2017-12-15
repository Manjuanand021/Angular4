import { Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

export class WizardBase {
    @Input()
    parent: FormGroup;
}