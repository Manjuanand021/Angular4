import {
  Component,
  ViewChild,
  OnInit,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  ContentChild,
  Output,
  EventEmitter,
  OnDestroy,
  Renderer2
} from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router';
import {
  Observable,
  Observer,
  Subscription
} from 'rxjs';
import {
  HttpEvent,
  HttpEventType
} from '@angular/common/http';
import 'rxjs/Rx';
import {
  Store
} from '@ngrx/store';

@Component({
  selector: 'league',
  templateUrl: './justiceleague.template.html',
  styles: [
    `
    p{text-align:justify;}`
  ]
})
export default class JusticeLeagueComponent implements OnInit, OnDestroy {
  _customSubscription: Subscription;
  storeCoreMembers: Observable<any>;
  _renderer: Renderer2;
  _router: Router;
  _activatedRoute: ActivatedRoute;
  leagueMembers: any;
  header: string;
  leadTxt: string;
  subHeader: string;
  coreMembers: any;
  _store: any;
  constructor(renderer: Renderer2, router: Router, activatedRoute: ActivatedRoute, store: Store<any>) {
    this._renderer = renderer;
    this._router = router;
    this._activatedRoute = activatedRoute;
    this.leagueMembers = [];
    this.header = `Justice League`;
    this.leadTxt = `The Justice League, is a fictional superhero team appearing in American comic books published by DC Comics.`;
    // tslint:disable-next-line:max-line-length
    this.subHeader = `Fueled by his restored faith in humanity and inspired by Superman's (Henry Cavill) selfless act, Bruce Wayne (Ben Affleck)
enlists newfound ally Diana Prince to face an even greater threat.Together, Batman and Wonder Woman work quickly
to recruit a team to stand against this newly awakened enemy.Despite the formation of an unprecedented league
of heroes -- Batman, Wonder Woman, Aquaman, Cyborg and the Flash -- it may be too late to save the planet from
an assault of catastrophic proportions`;
    this.coreMembers = [];
    this._store = store;
  }
  ngOnInit() {
    this.storeCoreMembers = this._store.select('jLeagueCoreMembers');
    this._activatedRoute.data.subscribe((data) => {
      this.leagueMembers = data.coreLeagueMembers;
    }, (error) => {
      console.log('Error occured...');
    }, () => {
      console.log('Observable completed...');
    });
  }
  ngOnDestroy() {
  }
}
