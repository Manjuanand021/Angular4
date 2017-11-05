import {
    Component,
    ViewChild,
    ngOnInit,
    OnDestroy,
    Renderer2,
    ViewEncapsulation
} from '@angular/core';
import template from './superman.template.html';

@Component({
    selector: 'superman',
    template: template
    // encapsulation: ViewEncapsulation.None
})
export default class SupermanComponent {
    @ViewChild('headerBar') headerBar;
    constructor(renderer: Renderer2) {
        this._renderer = renderer;
        this.header = 'Superman';
        this.leadTxt = `Look! Up in the sky! It’s a bird! It’s a plane! It’s…Well, you know how it ends, don’t you? It’s a sentence so iconic, there
                are probably kids shouting it in Swahili as you read this. Man of Steel - When a young boy discovers that
                he has extraordinary powers, he decides to find out about his origin. He then learns to fight for Earth when
                it gets attacked by members of his own race.`;
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