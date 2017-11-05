//Import core modules
import {
  NgModule
} from "@angular/core";
import {
  Routes,
  RouterModule
} from '@angular/router';

//Import feature modules
import JusticeLeagueRoutingModule from "./justiceleague.routing";
import SharedModule from "../shared/shared.module";

//Import components
import JusticeLeagueComponent from "./justiceleague.component";
import HeroTileComponent from "./herotile/hero-tile.component";
import PlotTileComponent from "./plottile/plot-tile.component";

//Import services
import AuthGuardService from "../../services/auth-guard.service";
import JusticeLeagueMembersService from "../../services/jLeague-members.service";
import UserService from "../../services/users.service";

@NgModule({
  declarations: [
    JusticeLeagueComponent,
    HeroTileComponent,
    PlotTileComponent
  ],
  imports: [
    RouterModule,
    JusticeLeagueRoutingModule,
    SharedModule
  ],
  exports: [],
  providers: [
    AuthGuardService,
    JusticeLeagueMembersService,
    UserService
  ]
})
export default class JusticeLeagueModule {}