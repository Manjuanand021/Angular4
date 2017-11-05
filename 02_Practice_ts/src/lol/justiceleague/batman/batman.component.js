import {
    Component,
    ViewChild,
    ngOnInit,
    OnDestroy,
    Renderer2
} from '@angular/core';
import template from './batman.template.html';

@Component({
    selector: 'batman',
    template: template
})
export default class BatmanComponent {
    @ViewChild('headerBar') headerBar;
    constructor(renderer: Renderer2) {
        this._renderer = renderer;
        this.header = `Batman`;
        this.leadTxt = `Dark Knight. Caped Crusader. World’s Greatest Detective. Whatever you know him as, wherever you know him from—the blockbuster
            movies, TV shows, video games, cartoons, or millions of comics—Batman is proof you don’t need superpowers to
            be a superhero… and the poster boy for what a bad childhood can do to you.`;
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