import {
    Component,
    ViewChild,
    ngOnInit,
    OnDestroy,
    Renderer2,
    ViewEncapsulation
} from '@angular/core';
import {
    ActivatedRoute
} from '@angular/router';
import template from './superman.template.html';

@Component({
    selector: 'superman',
    template: template
    // encapsulation: ViewEncapsulation.None
})
export default class SupermanComponent {
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
        // this._activatedRoute.data.subscribe((data) => {
        //     const supermanData = data.coreLeagueMembers[0];
        //     this.leadTxt = supermanData.description;
        // });
        // setInterval(() => {
        //     this._renderer.setStyle(this.headerBar.nativeElement, 'width', '100%');
        // });
    }
    ngOnDestroy() {
        // this._renderer.setStyle(this.headerBar.nativeElement, 'width', '0');
    }
}