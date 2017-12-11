import { Component, OnInit, ChangeDetectorRef, Input, OnChanges, DoCheck, AfterViewChecked } from '@angular/core';

@Component({
    selector: 'app-cd-child',
    templateUrl: 'cd-child.template.html'
})

export class CDChildComponent implements OnChanges, OnInit, DoCheck, AfterViewChecked {
    // tslint:disable-next-line:no-input-rename
    @Input('other-info') other;
    constructor(private _changeDetRef: ChangeDetectorRef) {
        // this._changeDetRef.detach();
    }

    ngOnInit() {
        console.log('child oninit');
    }
    ngOnChanges(values) {
        console.log('child on changes');
        // this.cd.reattach();
        // setTimeout(() => {
        //     this.cd.detach();
        // })
    }

    ngDoCheck() {
        console.log('child do check');
    }

    ngAfterViewChecked() {
        console.log('child view checked.');
    }
}
