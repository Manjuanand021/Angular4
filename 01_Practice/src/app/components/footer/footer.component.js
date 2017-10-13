import {
    Component
} from '@angular/core';
import template from './footer.template.html';

@Component({
    selector: 'app-footer',
    template: template
})
export default class FooterComponent {
    constructor() {
        this.currentYear = new Date().getFullYear();
    }
};