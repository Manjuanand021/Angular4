import {
    Directive,
    ElementRef,
    Renderer2
} from '@angular/core';

@Directive({
    selector: '[dc-onscroll]'
})
export default class DCOnSrollDirective {
    _element: ElementRef;
    _renderer: Renderer2;
    constructor(element: ElementRef, renderer: Renderer2) {
        this._element = element;
        this._renderer = renderer;
    }
};