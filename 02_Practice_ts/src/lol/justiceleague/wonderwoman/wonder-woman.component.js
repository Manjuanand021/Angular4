import {
    Component,
    ViewChild,
    ngOnInit,
    OnDestroy,
    Renderer2
} from '@angular/core';
import template from './wonder-woman.template.html';

@Component({
    selector: 'wonder-woman',
    template: template
})
export default class WonderWomanComponent {
    @ViewChild('headerBar') headerBar;
    constructor(renderer: Renderer2) {
        this._renderer = renderer;
        this.header = `Wonder Woman`;
        this.leadTxt = `OK, let’s just come out and say it: Wonder Woman is the most famous heroine of all time. No offense to the Lara Crofts, Buffys,
            or Disney princesses of the world, but none of them have been plastered on as many magazine covers, adorned as
            many T-shirts, or sold the countless comics, dolls, and action figures that Wonder Woman has. The full package
            of beauty, brains, and brawn, she’s been a feminist icon since her star-spangled intro in 1941.`;
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