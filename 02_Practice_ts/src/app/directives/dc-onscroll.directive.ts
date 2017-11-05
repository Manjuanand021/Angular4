import {
    Directive,
    OnInit,
    ElementRef,
    Renderer2,
    HostListener,
    HostBinding,
    Input
} from '@angular/core';

@Directive({
    selector: '[dc-onscroll]'
})
export default class DCOnSrollDirective {
    constructor(element: ElementRef, renderer: Renderer2) {
        this._element = element;
        this._renderer = renderer;
    }
};