import {
    NgModule
} from '@angular/core';
import {
    FormsModule
} from '@angular/forms';

import SharedModule from '../shared/shared.module';
import JusticeLeagueComponent from './justiceleague.component';
import JLMemberComponent from './jlmember/jlmember.component';
import AuthService from '../../services/authService';
import AuthGuardService from '../../services/auth-guard.service';
import JusticeLeagueMembersService from '../../services/jLeague-members.service';
import UserService from '../../services/users.service';

@NgModule({
    declarations: [
        JusticeLeagueComponent,
        JLMemberComponent
    ],
    imports: [SharedModule],
    exports: [],
    providers: [
        AuthService,
        AuthGuardService,
        JusticeLeagueMembersService,
        UserService
    ]
})
export default class JusticeLeagueModule {

};