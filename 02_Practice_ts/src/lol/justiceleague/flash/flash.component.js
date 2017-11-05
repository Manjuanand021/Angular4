import {
    Component,
    ViewChild,
    ngOnInit,
    OnDestroy,
    Renderer2
} from '@angular/core';
import template from './flah.template.html';

@Component({
    selector: 'flash',
    template: template
})
export default class FlashComponent {
    @ViewChild('headerBar') headerBar;
    constructor(renderer: Renderer2) {
        this._renderer = renderer;
        this.header = `The Flash`;
        this.leadTxt = `Indy cars, bullet trains, supersonic aircraft… The Flash leaves them all in the dust. Barry Allen, a forensic scientist with
            the Central City police force, is struck by lightning in a freak accident. When he wakes up after nine months,
            he discovers that he can achieve great speeds.`;
    }
    ngOnInit() {
        // setInterval(() => {
        //     this._renderer.setStyle(this.headerBar.nativeElement, 'width', '100%');
        // });
    }
    ngOnDestroy() {
        // this._renderer.setStyle(this.headerBar.nativeElement, 'width', '0');
    }
}