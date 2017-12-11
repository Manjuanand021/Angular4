import { Directive, EventEmitter, Output, Input, NgZone, ElementRef, OnInit, OnDestroy } from '@angular/core';

// tslint:disable-next-line:directive-selector
@Directive({ selector: '[outSideEventHandler]' })
export class OutsideDirective implements OnInit, OnDestroy {
    // tslint:disable-next-line:no-input-rename
    @Input('event-type') type: string;
    @Output('outSideEventHandler') outSideEventHandler = new EventEmitter();
    private _handler: Fucntion;
    constructor(private _zone: NgZone, private el: ElementRef) {
        this._zone.runOutsideAngular(() => {
            this._handler = () => {
                this.outSideEventHandler.emit();
            };
            this.el.nativeElement.addEventListener(this.type, this._handler, false);
        });
    }

    ngOnInit() {

    }
    ngOnDestroy() {
        this.el.nativeElement.removeEventListener(this.type, this._handler);
    }
}
