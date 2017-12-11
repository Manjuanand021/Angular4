import { Component, OnInit, ChangeDetectorRef, OnChanges, Input, DoCheck, NgZone, AfterViewChecked } from '@angular/core';

@Component({
    selector: 'app-cd',
    templateUrl: 'cd.template.html'
})

export class CDComponent implements OnChanges, OnInit, DoCheck, AfterViewChecked {
    @Input() manju;
    other;
    company: string;
    constructor(private _changeDetRef: ChangeDetectorRef, private _zone: NgZone) {
        // this._changeDetRef.detach();
    }

    ngOnInit() {
        console.log('parent oninit');
        this.company = 'Infosys limited.';
        this.other = {
            age: 30,
            role: 'TL'
        };
    }

    ngOnChanges(values) {
        console.log('parent on changes');
        // this._changeDetRef.detectChanges();
        // this._changeDetRef.reattach();
        // setTimeout(() => {
        //     this._changeDetRef.detach();
        // });
    }

    ngDoCheck() {
        // this._changeDetRef.markForCheck();
        console.log('Parent do check');
    }

    ngAfterViewChecked() {
        console.log('Parent view checked');
    }

    changeCompnay() {
        // this._zone.runOutsideAngular(() => {
        //     setTimeout(() => {
        //         this.company = 'Sapiens';
        //     });
        // });
        setTimeout(() => {
            this.company = 'Sapiens';
        });
    }
}
