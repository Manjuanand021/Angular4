import {
    Component,
    Input
} from '@angular/core';
import template from './hero-tile.template.html';

@Component({
    selector: 'hero-tile',
    template: template
})
export default class HeroTileComponent {
    @Input('details') heroDetails;
    constructor() {}
    returnLogoPath(logoPath) {
        // require(`${logoPath}`)
        return logoPath;
    }
}