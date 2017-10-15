import {
    Component,
    Inject,
    HostListener,
    OnInit
} from '@angular/core';
import {
    NgForm
} from '@angular/forms';
import { DOCUMENT } from '@angular/platform-browser';
import template from './app.component.html'

@Component({
    selector: 'app-root',
    template: template
        // styleUrls: ['./app.component.css']
})
export default class AppComponent {
    constructor(@Inject(DOCUMENT) document) {
        this._document = document;
        this.title = 'First Angular App';
        this.subHeader = 'who\'s WHO';
        this.stickyHeight = 0;
    }
    ngOnInit() {
        console.log('hmmmm');
        this._site_Header = $(this._document.body).find('.site-header');
        console.log('llol', this._site_Header);
        this.stickyHeight = this._site_Header[0].offsetHeight;
    }
    onMemberSelected(memberName) {
        console.log(memberName);
        this.memberName = memberName;
    }

    onFormSubmit(form: NgForm) {
        console.log(form);
        console.log('submitted');
    }

    // @HostListener('window:scroll', []) onscroll() {
    //     console.log(this._document);
    //     if (this._document.body.scrollY > this.stickyHeight)
    //         this._site_Header.addClass('sticky');
    //     else
    //         this._site_Header.removeClass('sticky');

    // }
}