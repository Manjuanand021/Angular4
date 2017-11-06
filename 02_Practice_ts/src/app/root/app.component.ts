import {
    Component
} from '@angular/core';
import {
    NgForm
} from '@angular/forms';

const template = require('./app.component.html');


@Component({
    selector: 'app-root',
    template: template
    // styleUrls: ['./app.component.css']
})
export default class AppComponent {
    title: string = 'First Angular App';
    subHeader: string = 'who\'s WHO';
    memberName: string;
    constructor() { }
}