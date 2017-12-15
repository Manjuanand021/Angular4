import { Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

export class StepsBase {
    @Input()
    parent: FormGroup;
}