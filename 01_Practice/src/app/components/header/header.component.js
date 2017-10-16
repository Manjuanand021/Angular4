import {
    Component,
    Input,
    ViewChild,
    ElementRef,
    Renderer2
} from '@angular/core';
import template from './header.template.html';
import JusticeLeagueMembersService from '../../services/jLeague-members.service';
import Member from '../../models/member.model';

@Component({
    selector: 'app-header',
    template: template,
    styles: [`
    .active{
        border-bottom: 2px solid;    
    }
    `]
})
export default class HeaderComponent {
    @ViewChild('sideNavBar') sideNavBar: ElementRef;
    constructor(justiceLeagueMembersService: JusticeLeagueMembersService, renderer: Renderer2) {
        this._justiceLeagueMembersService = justiceLeagueMembersService;
        this._renderer = renderer;
    }
    addFlash() {
        this._justiceLeagueMembersService.addNewHero.next(new Member('The Flash',
            'bruce wayne', ['Dark Knight', ' Matches Malone', 'Caped Crusader'], ['super strength', 'flight', 'invulnerability', 'super speed', 'heat vision', 'freeze breath', 'x-ray vision', 'superhuman hearing', 'healing factor'],
            'gotham city',
            'CEO of Wayne Enterprises ',
            'Dark Knight. Caped Crusader. World’s Greatest Detective. Whatever you know him as, wherever you know him from—the blockbuster movies, TV shows, video games, cartoons, or millions of comics—Batman is proof you don’t need superpowers to be a superhero… and the poster boy for what a bad childhood can do to you.',
            'http://www.dccomics.com/sites/default/files/styles/whos_who/public/ww_flash_588c0c78096793.56539878_58911183a7a817.13114786.jpg?itok=51sOwUR9',
            '/characters/the-flash'));
    }
    addAquaman() {
        this._justiceLeagueMembersService.addNewHero.next(new Member('Aquaman',
            'bruce wayne', ['Dark Knight', ' Matches Malone', 'Caped Crusader'], ['super strength', 'flight', 'invulnerability', 'super speed', 'heat vision', 'freeze breath', 'x-ray vision', 'superhuman hearing', 'healing factor'],
            'gotham city',
            'CEO of Wayne Enterprises ',
            'Dark Knight. Caped Crusader. World’s Greatest Detective. Whatever you know him as, wherever you know him from—the blockbuster movies, TV shows, video games, cartoons, or millions of comics—Batman is proof you don’t need superpowers to be a superhero… and the poster boy for what a bad childhood can do to you.',
            'http://www.dccomics.com/sites/default/files/styles/whos_who/public/ww_aquaman_588c0ba8f18257.29894859_589111638cff75.10820220.jpg?itok=OPGnWStb',
            '/characters/aquaman'));
    }
    addCyborg() {
        this._justiceLeagueMembersService.addNewHero.next(new Member('cyborg',
            'bruce wayne', ['Dark Knight', ' Matches Malone', 'Caped Crusader'], ['super strength', 'flight', 'invulnerability', 'super speed', 'heat vision', 'freeze breath', 'x-ray vision', 'superhuman hearing', 'healing factor'],
            'gotham city',
            'CEO of Wayne Enterprises ',
            'Dark Knight. Caped Crusader. World’s Greatest Detective. Whatever you know him as, wherever you know him from—the blockbuster movies, TV shows, video games, cartoons, or millions of comics—Batman is proof you don’t need superpowers to be a superhero… and the poster boy for what a bad childhood can do to you.',
            'http://www.dccomics.com/sites/default/files/styles/whos_who/public/ww_cyborg_588c0bec1db114.91404563_589111406dd3c2.36803058.jpg?itok=E9zlLUra',
            '/characters/cyborg'));
    }

    openOverLay() {
        this._renderer.setStyle(this.sideNavBar.nativeElement, 'width', '100%');
        console.log('open');
    }
    closeOverLay() {
        console.log('CLOSE');
        this._renderer.setStyle(this.sideNavBar.nativeElement, 'width', '0');
    }
}