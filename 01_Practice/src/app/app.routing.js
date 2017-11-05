import {
    NgModule
} from '@angular/core';
import {
    Routes,
    RouterModule,
    CanActivate
} from '@angular/router';
import JusticeLeagueComponent from './components/justiceleague/justiceleague.component';
import AuthGuardService from './services/auth-guard.service';
import PageNotFoundErrorComponent from './components/pagenotfound/pagenotfound.component';
import JusticeLeagueMembersService from './services/jLeague-members.service';
import SupermanComponent from './components/justiceleague/superman/superman.component';
import BatmanComponent from './components/justiceleague/batman/batman.component';
import WonderWomanComponent from './components/justiceleague/wonderwoman/wonder-woman.component';
import GreenLanternComponent from './components/justiceleague/greenlantern/green-lantern.component';
import FlashComponent from './components/justiceleague/flash/flash.component';
import AquamanComponent from './components/justiceleague/aquaman/aquaman.component';
const routes: Routes = [{
        path: '',
        component: JusticeLeagueComponent,
        CanActivate: [AuthGuardService],
        data: {
            name: 'Majuanand Toladinni'
        },
        resolve: {
            coreMembers: JusticeLeagueMembersService
        }
    },
    {
        path: 'superman',
        component: SupermanComponent
    },
    {
        path: 'batman',
        component: BatmanComponent
    },
    {
        path: 'wonder-woman',
        component: WonderWomanComponent
    },
    {
        path: 'green-lantern',
        component: GreenLanternComponent
    },
    {
        path: 'flash',
        component: FlashComponent
    },
    {
        path: 'aquaman',
        component: AquamanComponent
    },

    {
        path: 'not-found',
        component: PageNotFoundErrorComponent,
    },
    {
        path: '**',
        redirectTo: '/not-found'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    // imports: [RouterModule.forRoot(routes, {
    //     enableTracing: true // <-- debugging purposes only
    // })],
    exports: [RouterModule]
})

export default class AppRoutingModule {

};