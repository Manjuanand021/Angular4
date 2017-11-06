import { ActivatedRoute } from '@angular/router';
import {
    Component,
    OnInit,
    Renderer2,
    OnDestroy
} from '@angular/core';


@Component({
    selector: 'superman',
    template: './superman.template.html'
    // encapsulation: ViewEncapsulation.None
})
export default class SupermanComponent implements OnInit, OnDestroy {
    _renderer: Renderer2;
    _activatedRoute: ActivatedRoute;
    header: string;
    // tslint:disable-next-line:max-line-length
    leadTxt: string;
    constructor(renderer: Renderer2, activatedRoute: ActivatedRoute) {
        this._renderer = renderer;
        this._activatedRoute = activatedRoute;
        this.header = 'Superman';
        // tslint:disable-next-line:max-line-length
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