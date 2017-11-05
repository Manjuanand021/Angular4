import {
    Component,
    ViewChild,
    ngOnInit,
    OnDestroy,
    Renderer2
} from '@angular/core';
import template from './aquaman.template.html';

@Component({
    selector: 'aquaman',
    template: template
})
export default class AquamanComponent {
    @ViewChild('headerBar') headerBar;
    constructor(renderer: Renderer2) {
        this._renderer = renderer;
        this.header = `Aquaman`;
        this.leadTxt = `Make all the sushi jokes, YouTube spoofs, and SNL sketches you want, Aquaman’s been an icon for over seventy years. The King
            of the Seven Seas. Reluctant ruler of Atlantis. A man who holds his own against heroes like Superman and Wonder
            Woman. He’s so recognizable that when officials speak about the perils of sea pollution, they’ll whip out Aquaman
            references to sound hip.`;
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