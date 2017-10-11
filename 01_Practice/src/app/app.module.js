import {
    BrowserModule
} from '@angular/platform-browser';
import {
    NgModule
} from '@angular/core';
// import {
//     HttpModule
// } from '@angular/http';
import {
    FormsModule
} from '@angular/forms';
import {
    HttpClientModule
} from '@angular/common/http';
import SharedModule from './components/shared/shared.module';
import JusticeLeagueModule from './components/justiceleague/justiceleague.module';
import AppComponent from './components/root/app.component';
import AppRoutingModule from './app.routing';
import HeaderComponent from './components/header/header.component';
import FooterComponent from './components/footer/footer.component';
import PageNotFoundErrorComponent from './components/pagenotfound/pagenotfound.component';
// import JusticeLeagueComponent from './components/justiceleague/justiceleague.component';
// import JLMemberComponent from './components/justiceleague/jlmember/jlmember.component';
// import HighlightDirective from './directives/highlight.directive';
// import AuthService from './services/authService';
// import AuthGuardService from './services/auth-guard.service';
// import JusticeLeagueMembersService from './services/jLeague-members.service';
// import UserService from './services/users.service';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        PageNotFoundErrorComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        JusticeLeagueModule,
        SharedModule
    ],
    // providers: [
    //     AuthService,
    //     AuthGuardService,
    //     JusticeLeagueMembersService,
    //     UserService
    // ],
    bootstrap: [AppComponent]
})
export class AppModule {}