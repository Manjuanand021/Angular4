import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'sh-preview',
    templateUrl: './preview.template.html'
    // since this is dumb component, I have set ChangeDetectionStrategy strategy to OnPush
    // changeDetection: ChangeDetectionStrategy.OnPush
})

export class ShPreviewComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}