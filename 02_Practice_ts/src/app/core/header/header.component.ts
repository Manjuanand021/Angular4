import {
    Component,
    Input,
    ViewChild,
    ElementRef,
    Renderer2
} from '@angular/core';
import template from './header.template.html';

@Component({
    selector: 'app-header',
    template: template,
    styles: [`
    .active{
        border-bottom: 2px solid;    
    }
    `]
})
export default class HeaderComponent {
    @ViewChild('sideNavBar') sideNavBar: ElementRef;
    constructor(renderer: Renderer2) {
        this._renderer = renderer;
        this.isOverLayVisible = false;
    }
    toggleOverlay() {
        this.isOverLayVisible = !this.isOverLayVisible;
        if (this.isOverLayVisible)
            this._renderer.setStyle(this.sideNavBar.nativeElement, 'width', '100%');
        else
            this._renderer.setStyle(this.sideNavBar.nativeElement, 'width', '0');

    }
}