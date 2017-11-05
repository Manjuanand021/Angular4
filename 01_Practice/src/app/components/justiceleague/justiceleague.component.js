import {
  Component,
  ViewChild,
  ngOnInit,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  ContentChild,
  Output,
  EventEmitter,
  OnDestroy,
  HTMLFormElement,
  Renderer2
} from "@angular/core";
import {
  ActivatedRoute
} from "@angular/router";
import {
  Observable,
  Observer,
  Subscription
} from "rxjs";
import {
  HttpEvent,
  HttpEventType,
  Input
} from "@angular/common/http";
import "rxjs/Rx";
import template from "./justiceleague.template.html";
import JusticeLeagueMembersService from "../../services/jLeague-members.service";
import UserService from "../../services/users.service";

@Component({
  selector: "league",
  template: template,
  styles: [
    `
    p{text-align:justify;}`
  ]
})
export default class JusticeLeagueComponent {
  memberSelectSubscription: Subscription;
  numberSubscription: Subscription;
  myObservableSubscription: Subscription;
  constructor(
    leaguemembersService: JusticeLeagueMembersService,
    router: ActivatedRoute,
    userService: UserService,
    renderer: Renderer2
  ) {
    this._leagueMembersService = leaguemembersService;
    this._router = router;
    this._userService = userService;
    this._renderer = renderer;
    this.header = `Justice League`;
    this.leadTxt = `The Justice League, is a fictional superhero team appearing in American comic books published by DC Comics.`;
    this.subHeader = `Fueled by his restored faith in humanity and inspired by Superman's (Henry Cavill) selfless act, Bruce Wayne (Ben Affleck)
            enlists newfound ally Diana Prince to face an even greater threat. Together, Batman and Wonder Woman work quickly
            to recruit a team to stand against this newly awakened enemy. Despite the formation of an unprecedented league
            of heroes -- Batman, Wonder Woman, Aquaman, Cyborg and the Flash -- it may be too late to save the planet from
            an assault of catastrophic proportions`;
    this.coreMembers = [];
  }
  ngOnInit() {}
  ngOnDestroy() {}
}