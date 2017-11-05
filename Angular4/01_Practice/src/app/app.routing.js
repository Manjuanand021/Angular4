//Import core modules
import {
    NgModule
} from '@angular/core';
import {
    Routes,
    RouterModule,
    CanActivate
} from '@angular/router';

//Import feature modules
import SupermanModule from './components/superman/superman.module';

//Import components
import JusticeLeagueComponent from './components/justiceleague/justiceleague.component';
import PageNotFoundErrorComponent from './components/pagenotfound/pagenotfound.component';
import SupermanComponent from './components/superman/superman.component';

//Import services
import AuthGuardService from './services/auth-guard.service';
import JusticeLeagueMembersService from './services/jLeague-members.service';

/* Lazy loaded modules use root injectors for dependency injection
 ********************************************************************/
const routes: Routes = [
    // {
    //     path: 'superman',
    //     loadChildren: 'components/superman/superman.module#SupermanModule'
    // },
    // {
    //     path: 'batman',
    //     component: BatmanComponent
    // },
    // {
    //     path: 'wonder-woman',
    //     component: WonderWomanComponent
    // },
    // {
    //     path: 'green-lantern',
    //     component: GreenLanternComponent
    // },
    // {
    //     path: 'flash',
    //     component: FlashComponent
    // },
    // {
    //     path: 'aquaman/:id',
    //     canActivate: [AuthGuardService],
    //     // canActivateChild: [AuthGuardService],
    //     component: AquamanComponent
    // },

    {
        path: 'not-found',
        component: PageNotFoundErrorComponent,
    },
    // {
    //     path: '',
    //     component: JusticeLeagueComponent,
    //     pathMatch: 'full',
    //     resolve: {
    //         coreLeagueMembers: JusticeLeagueMembersService
    //     }
    // },
    //Catch all route
    // {
    //     path: '**',
    //     redirectTo: '/not-found'
    // }
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