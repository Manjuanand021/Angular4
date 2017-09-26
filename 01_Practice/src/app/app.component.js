import {
    Component
} from '@angular/core';
import template from './app.component.html'

@Component({
    selector: 'root',
    template: template
    // styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor() {
        this.title = 'First Angular App';
    }
}