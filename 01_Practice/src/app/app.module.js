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
import SupermanComponent from './components/justiceleague/superman/superman.component';
import BatmanComponent from './components/justiceleague/batman/batman.component';
import WonderWomanComponent from './components/justiceleague/wonderwoman/wonder-woman.component';
import GreenLanternComponent from './components/justiceleague/greenlantern/green-lantern.component';
import FlashComponent from './components/justiceleague/flash/flash.component';
import AquamanComponent from './components/justiceleague/aquaman/aquaman.component';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        PageNotFoundErrorComponent,
        SupermanComponent,
        BatmanComponent,
        WonderWomanComponent,
        GreenLanternComponent,
        FlashComponent,
        AquamanComponent
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