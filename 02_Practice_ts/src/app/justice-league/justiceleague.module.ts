// Import core modules
import {
  NgModule
} from '@angular/core';
import {
  RouterModule
} from '@angular/router';

// Import feature modules
import JusticeLeagueRoutingModule from './justiceleague.routing';
import SharedModule from '../shared/shared.module';

// Import components
import JusticeLeagueComponent from './justiceleague.component';
import HeroTileComponent from '../hero-tile/hero-tile.component';
import PlotTileComponent from '../plot-tile/plot-tile.component';

// Import services
import AuthGuardService from '../services/auth-guard.service';
import JusticeLeagueMembersService from '../services/jLeague-members.service';

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
    JusticeLeagueMembersService
  ]
})
export default class JusticeLeagueModule { }