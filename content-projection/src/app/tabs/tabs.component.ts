import {
    Component,
    OnInit,
    AfterContentInit,
    QueryList,
    ContentChildren,
    ViewChild,
    ViewContainerRef,
    ComponentFactoryResolver
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'cp-tabs',
    templateUrl: 'tabs.template.html'
})

export class TabsComponent implements OnInit, AfterContentInit {
    @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
    @ViewChild('vc', { read: ViewContainerRef }) vc;

    constructor(private _componentFactoryResolver: ComponentFactoryResolver) {

    }

    ngOnInit() {
    }

    ngAfterContentInit() {
        this.tabs.toArray().forEach(tab => {
            console.log(tab);
        });
    }

    addTab(tmpl) {
        this.vc.clear();
        const compoFactory = this._componentFactoryResolver.resolveComponentFactory(TabComponent);
        const compoRef = this.vc.createComponent(compoFactory);
    }
}
