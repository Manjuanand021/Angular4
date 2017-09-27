import {
    BrowserModule
} from '@angular/platform-browser';
import {
    NgModule
} from '@angular/core';
import {
    AppComponent
} from './app.component';
import HeaderComponent from './header/header.component';
import JusticeLeagueComponent from './justiceleague/justiceleague.component';
import JLMemberComponent from './justiceleague/jlmember/jlmember.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        JusticeLeagueComponent,
        JLMemberComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}