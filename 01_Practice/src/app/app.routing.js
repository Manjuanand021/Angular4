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