import {
    Component,
    ViewChild,
    ngOnInit,
    OnDestroy,
    Renderer2
} from '@angular/core';
import template from './green-lantern.template.html';

@Component({
    selector: 'green-lantern',
    template: template
})
export default class GreenLanternComponent {
    @ViewChild('headerBar') headerBar;
    constructor(renderer: Renderer2) {
        this._renderer = renderer;
        this.header = `Green Lantern`;
        this.leadTxt = `Imagine if the ring on your finger was more than a piece of gaudy jewelry. Instead, it’s the universe’s most powerful weapon.
            It can create whatever you wish out of pure energy, its might limited only by your imagination and will. And
            with it comes exclusive membership to an exclusive intergalactic police force with alien officers spanning the
            cosmos.`;
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