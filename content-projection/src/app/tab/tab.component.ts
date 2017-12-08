import { Component, OnInit, Input } from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'cp-tab',
    templateUrl: 'tab.template.html'
})

export class TabComponent implements OnInit {
    @Input() title: string;
    active: boolean;
    @Input() template;
    constructor() {
    }
    ngOnInit() {
    }
}
