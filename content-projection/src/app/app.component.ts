import {
  Component,
  OnInit,
  ViewContainerRef,
  ViewChild,
  ComponentFactoryResolver,
  ComponentFactory,
  ComponentRef,
  AfterViewInit
} from '@angular/core';
import { TabComponent } from './tab/tab.component';
import { TabsComponent } from './tabs/tabs.component';
import { TemplateRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('tmpl', { read: TemplateRef }) tmpl;
  // @ViewChild('hook', { read: ViewContainerRef }) hook;
  @ViewChild(TabsComponent) tabsComponent: TabsComponent;
  content: string;
  constructor(private vc: ViewContainerRef, private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
    // console.log(this.tabsComponent);
    this.content = 'this is dynamic content';
  }

  ngAfterViewInit() {
    // this.vc.createEmbeddedView(this.tmpl);
    // this.hook.createEmbeddedView(this.tmpl);
    // this.hook.clear();
    // const factory: ComponentFactory<TabComponent> = this.resolver.resolveComponentFactory(TabComponent);
    // const componentRef: ComponentRef<TabComponent> = this.hook.createComponent(factory);
    // (componentRef.instance).title = 'foo';
  }

  addTab() {
    this.tabsComponent.addTab(this.tmpl);
  }
  closeTab() {
    this.tabsComponent.closeTab();
  }
}

