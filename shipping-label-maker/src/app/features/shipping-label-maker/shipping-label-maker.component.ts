import { Component, OnInit, DoCheck, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Component({
    selector: 'sh-label-maker',
    templateUrl: './shipping-label-maker.template.html'
})

export default class ShippingLabelMakerComponent implements OnInit {
    public addr;
    public emp;
    constructor(private zone: NgZone) { }

    ngOnInit() {
        this.addr = {
            city: 'Haveri',
            state: 'KA'
        };
        this.emp = { name: 'Manjuanand' };
        // this.zone
        // // .fork({
        // //     beforeTask: () => {
        // //         console.log('before task');
        // //     },
        // //     afterTask: () => {
        // //         console.log('after task');
        // //     }
        // // })
        // .run(() => {
        //     this.foo();
        //     this.bar();
        //     this.bazingaa();
        // });
    }


    foo() {
        console.log('foo');
    }

    bar() {
        setTimeout(() => {
            console.log('bar');
        });
    }

    bazingaa() {
        console.log('bazingaa');
    }

    // ngDoCheck() {
    //     console.log('Chnage detection for shipping labe; component');
    // }

    changeCity() {
        this.addr = {
            ...this.addr,
            city: 'Mysore'
        }
    }
}