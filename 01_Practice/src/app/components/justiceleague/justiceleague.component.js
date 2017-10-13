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
    HTMLFormElement
} from '@angular/core';
import {
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
import template from './justiceleague.template.html';
import JusticeLeagueMembersService from '../../services/jLeague-members.service';
import UserService from '../../services/users.service';

@Component({
    selector: 'league',
    template: template
})
export default class JusticeLeagueComponent {
    memberSelectSubscription: Subscription;
    numberSubscription: Subscription;
    myObservableSubscription: Subscription;
    constructor(leaguemembersService: JusticeLeagueMembersService, router: ActivatedRoute, userService: UserService) {
        this._leagueMembersService = leaguemembersService;
        this._router = router;
        this._userService = userService;
    }
    ngOnInit() {
        this.clicked = true;
        this.memberSelectSubscription = this._leagueMembersService.onMemberSelect.subscribe((memberName) => {
            console.log('Subscribed member name', memberName);
        });
        // console.log('Data recieved from route', this._router.snapshot.data);
        this._router.data.subscribe((data) => {
            this.coreMembers = data.coreMembers;
        });
        // this._router.params.subscribe((params) => {
        //     const empId = +params.empId; //converting string to number
        //     console.log(typeof empId);
        // }, (err) => {
        //     console.log(err);
        // }, () => {
        //     console.log('Write observable completion logic.');
        // });

        //**********************
        //Observables tuts+
        //**********************
        // let numbers = Observable.interval(1000);
        // numbers = numbers.map((n) => n * 10);
        // numbers.subscribe(num => {
        //     console.log('Observable number ', num);
        // });
        // const myObservable = Observable.create((_observer: Observer) => {
        //     setTimeout(() => {
        //         _observer.next('first package');
        //     }, 2000);
        //     setTimeout(() => {
        //         _observer.next('second package');
        //     }, 3000);
        //     setTimeout(() => {
        //         _observer.complete();
        //     }, 4000);
        //     setTimeout(() => {
        //         _observer.error('error while sending package');
        //     }, 5000);
        // });
        // myObservable.subscribe(
        //     (data) => {
        //         console.log(data);
        //     },
        //     (error) => {
        //         console.log(error);
        //     },
        //     () => {
        //         console.log('Completed');
        //     }
        // );

        this._leagueMembersService.addNewHero.subscribe((newHero) => {
            this._leagueMembersService.leagueCoreMembers.push(newHero);
        });
        //******************************** */
        //Http examples
        //******************************** */        
        // const userRegsterObservable = this._userService.registerUser({
        //     email: 'lol@gmail.com',
        //     password: 'lol'
        // });
        // userRegsterObservable.subscribe((data) => {
        //     console.log('http post data', data);
        // });
        const userListObservable = this._userService.getListOfUsers();
        userListObservable.subscribe((response) => {
            console.log(response);
        }, (error) => {
            console.log('Error caught in component', error);
        });
    }
    onMemberSelect(memberName) {
        this.memberSelected.emit(memberName);
    }
    onClick() {
        this.clicked = !this.clicked;
    }
    ngOnDestroy() {
        this.memberSelectSubscription.unSubscribe();
        // this.myObservableSubscription.unsubscribe();
        // this.numberSubscription.unsubscribe();
    }
}