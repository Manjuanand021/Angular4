//Import core modules
import {
    NgModule
} from '@angular/core';
import {
    RouterModule
} from '@angular/router';

//Import feature modules

//Import components
import JusticeLeagueComponent from './justiceleague.component';

//Import services
import JusticeLeagueMembersService from '../services/jLeague-members.service';

const routes: Routes = [{
    path: '',
    component: JusticeLeagueComponent,
    pathMatch: 'full',
    resolve: {
        coreLeagueMembers: JusticeLeagueMembersService
    }
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export default class JusticeLeagueRoutingModule {

};