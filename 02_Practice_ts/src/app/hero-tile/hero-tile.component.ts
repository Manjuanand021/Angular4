import {
    Component,
    Input
} from '@angular/core';

@Component({
    selector: 'hero-tile',
    template: './hero-tile.template.html'
})
export default class HeroTileComponent {
    @Input('details') heroDetails;
    constructor() { }
    returnLogoPath(logoPath) {
        // require(`${logoPath}`)
        return logoPath;
    }
}