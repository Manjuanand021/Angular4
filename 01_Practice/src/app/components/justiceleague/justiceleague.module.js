import {
  NgModule
} from "@angular/core";
import {
  Routes,
  RouterModule
} from '@angular/router';
import SharedModule from "../shared/shared.module";
import JusticeLeagueComponent from "./justiceleague.component";
import AuthService from "../../services/authService";
import AuthGuardService from "../../services/auth-guard.service";
import JusticeLeagueMembersService from "../../services/jLeague-members.service";
import UserService from "../../services/users.service";
import JumbotronComponent from "./jumbotron/jumbotron.component";
import HeroTileComponent from "./herotile/hero-tile.component";
import PlotTileComponent from "./plottile/plot-tile.component";

@NgModule({
  declarations: [
    JusticeLeagueComponent,
    JumbotronComponent,
    HeroTileComponent,
    PlotTileComponent
  ],
  imports: [RouterModule, SharedModule],
  exports: [
    JumbotronComponent
  ],
  providers: [
    AuthService,
    AuthGuardService,
    JusticeLeagueMembersService,
    UserService
  ]
})
export default class JusticeLeagueModule {}