import {
    NgModule
} from '@angular/core';
import {
    CommonModule
} from '@angular/common';
import HighlightDirective from '../directives/highlight.directive';
import JumbotronComponent from './jumbotron/jumbotron.component';
@NgModule({
    declarations: [
        HighlightDirective,
        JumbotronComponent
    ],
    imports: [CommonModule],
    exports: [
        CommonModule,
        HighlightDirective,
        JumbotronComponent
    ]
})
export default class SharedModule {

};