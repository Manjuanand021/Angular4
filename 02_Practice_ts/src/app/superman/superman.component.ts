import {
    Component,
    ViewChild,
    OnInit,
    OnDestroy,
    Renderer2,
    ViewEncapsulation
} from '@angular/core';
import {
    ActivatedRoute
} from '@angular/router';

@Component({
    selector: 'superman',
    template: './superman.template.html'
    // encapsulation: ViewEncapsulation.None
})
export default class SupermanComponent implements OnInit, OnDestroy {
    constructor(renderer: Renderer2, activatedRoute: ActivatedRoute) {
        this._renderer = renderer;
        this._activatedRoute = activatedRoute;
        this.header = 'Superman';
        this.leadTxt = `Look! Up in the sky! It’s a bird! It’s a plane! It’s…Well, you know how it ends, don’t you? It’s a sentence so iconic, there
                are probably kids shouting it in Swahili as you read this. Man of Steel - When a young boy discovers that
                he has extraordinary powers, he decides to find out about his origin. He then learns to fight for Earth when
                it gets attacked by members of his own race.`;
    }
    ngOnInit() {
    }
    ngOnDestroy() {
    }
}