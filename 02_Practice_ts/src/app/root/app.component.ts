import {
    Component
} from '@angular/core';
import {
    NgForm
} from '@angular/forms';

@Component({
    selector: 'app-root',
    template: './app.component.html'
    // styleUrls: ['./app.component.css']
})
export default class AppComponent {
    constructor() {
        this.title = 'First Angular App';
        this.subHeader = 'who\'s WHO';
    }
    onMemberSelected(memberName) {
        console.log(memberName);
        this.memberName = memberName;
    }

    onFormSubmit(form: NgForm) {
        console.log(form);
        console.log('submitted');
    }
}