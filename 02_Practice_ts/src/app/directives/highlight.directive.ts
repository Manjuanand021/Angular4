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
    selector: '[highlight]'
})
export default class HighlightDirective {
    @Input('default-color') defaultColor = 'black';
    @Input('highlight') highLightColor = 'blue';
    @HostBinding('style.color') color;
    constructor(_element: ElementRef, _renderer: Renderer2) {
        this.element = _element;
        this.renderer = _renderer;
        this.color = this.defaultColor;
    }

    ngOnInit() {
        // this.element.nativeElement.style.color = 'lightcoral';
        // this.renderer.setStyle(this.element.nativeElement, 'color', 'red', '!important');
    }
    // no AfterViewInit or other hooks available since directive does not have template/view

    @HostListener('mouseenter') onmouseenter(eventData: Event) {
        // console.log(eventData);
        // this.renderer.setStyle(this.element.nativeElement, 'color', 'blue', '!important');
        this.color = this.highLightColor;
    }
    @HostListener('mouseleave') onmouseleave(eventData: Event) {
        // console.log(eventData);
        // this.renderer.setStyle(this.element.nativeElement, 'color', 'black', '!important');
        this.color = this.defaultColor;
    }
}