import {
    Component,
    ViewChild,
    ngOnInit,
    OnDestroy,
    Renderer2
} from '@angular/core';
import {
    Router,
    ActivatedRoute,
    Params
} from '@angular/router';
import {
    Subscription
} from 'rxjs/Subscription';
import template from './aquaman.template.html';

@Component({
    selector: 'aquaman',
    template: template
})
export default class AquamanComponent {
    @ViewChild('headerBar') headerBar;
    _paramsSubscription: Subscription;
    constructor(renderer: Renderer2, router: Router, currentRoute: ActivatedRoute) {
        this._renderer = renderer;
        this._router = router;
        this._currentRoute = currentRoute;
        this.header = `Aquaman`;
        this.leadTxt = `Make all the sushi jokes, YouTube spoofs, and SNL sketches you want, Aquaman’s been an icon for over seventy years. The King
            of the Seven Seas. Reluctant ruler of Atlantis. A man who holds his own against heroes like Superman and Wonder
            Woman. He’s so recognizable that when officials speak about the perils of sea pollution, they’ll whip out Aquaman
            references to sound hip.`;
    }
    ngOnInit() {
        // setInterval(() => {
        //     this._renderer.setStyle(this.headerBar.nativeElement, 'width', '100%');
        // });
        console.log(this._currentRoute.snapshot.params['id']);
        this._paramsSubscription = this._currentRoute.params.subscribe((obj: Params) => {
            console.log(+obj.id);
        });
    }
    ngOnDestroy() {
        // this._renderer.setStyle(this.headerBar.nativeElement, 'width', '0');
        this._paramsSubscription.unsubscribe();
    }
    onReloadClick() {
        this._router.navigate(['/aquaman', 10], {
            relativeTo: this._currentRoute,
            queryParamsHandling: 'merge',
            fragment: 'powers',
            queryParams: {
                allowParse: true
            }
        });
    }
}