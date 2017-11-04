//Import core modules
import {
    NgModule
} from '@angular/core';
import {
    BrowserModule
} from '@angular/platform-browser';
import {
    FormsModule
} from '@angular/forms';
import {
    HttpClientModule
} from '@angular/common/http';
import {
    BrowserAnimationsModule
} from '@angular/platform-browser/animations'
import {
    trigger,
    state,
    style
} from '@angular/animations';
import {
    StoreModule
} from '@ngrx/store';

//Import modules
import CoreModule from './components/core/core.module';
import AppRoutingModule from './app.routing';
import JusticeLeagueModule from './components/justiceleague/justiceleague.module';
import SupermanModule from './components/superman/superman.module';

//Import components
import AppComponent from './components/root/app.component';
import HeaderComponent from '../app/components/core/header/header.component';
import FooterComponent from '../app/components/core/footer/footer.component';
import PageNotFoundErrorComponent from './components/pagenotfound/pagenotfound.component';

//Import services
import AuthService from './services/auth.service';
import AuthGuardService from './services/auth-guard.service';
import JusticeLeagueMembersService from './services/jLeague-members.service';

//Import reducers
import {
    coreMembersReducer
} from './ngrx-store/members.reducers';


@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundErrorComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        // CoreModule,
        JusticeLeagueModule,
        SupermanModule,
        StoreModule.forRoot({
            coreMembers: coreMembersReducer
        })
    ],
    providers: [
        AuthService,
        AuthGuardService,
        JusticeLeagueMembersService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}