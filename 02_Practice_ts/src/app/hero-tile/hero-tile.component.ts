import {
    Component,
    Input
} from '@angular/core';

@Component({
    selector: 'hero-tile',
    templateUrl: './hero-tile.template.html'
})
export default class HeroTileComponent {
    @Input('details') heroDetails: any;
    constructor() { }
}
