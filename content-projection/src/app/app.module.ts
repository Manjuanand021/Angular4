import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';
import { CounterComponent } from './counter/counter.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { CDComponent } from './change-detection/cd.component';
import { CDChildComponent } from './change-detection/cd-child.component';
import { OutsideDirective } from './change-detection/outSideEventHandler.directive';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    TabComponent,
    WrapperComponent,
    CounterComponent,
    CDComponent,
    CDChildComponent,
    OutsideDirective
  ],
  entryComponents: [TabComponent],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
