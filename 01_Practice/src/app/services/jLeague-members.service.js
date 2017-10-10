import {
    EventEmitter
} from '@angular/core';
import {
    Resolve,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import {
    Subject
} from 'rxjs/Subject';
import Member from '../models/member.model';

export default class JusticeLeagueMembersService {
    addNewHero = new Subject();
    constructor() {
        this.leagueCoreMembers = [new Member('Superman',
                'kal-el', ['man of steel', 'sun of krypton', 'the adopted hero'], ['super strength', 'flight', 'invulnerability', 'super speed', 'heat vision', 'freeze breath', 'x-ray vision', 'superhuman hearing', 'healing factor'],
                'metropolis',
                'reporter',
                'Look! Up in the sky! It’s a bird! It’s a plane! It’s…Well, you know how it ends, don’t you? It’s a sentence so iconic, there are probably kids shouting it in Swahili as you read this.',
                'http://www.dccomics.com/sites/default/files/styles/whos_who/public/ww_superman_588c0b2b7e4894.14006222_589110299aa510.60892721.jpg?itok=0O5JEhrd',
                '/characters/superman'),
            new Member('Batman',
                'bruce wayne', ['Dark Knight', ' Matches Malone', 'Caped Crusader'], ['super strength', 'flight', 'invulnerability', 'super speed', 'heat vision', 'freeze breath', 'x-ray vision', 'superhuman hearing', 'healing factor'],
                'gotham city',
                'CEO of Wayne Enterprises ',
                'Dark Knight. Caped Crusader. World’s Greatest Detective. Whatever you know him as, wherever you know him from—the blockbuster movies, TV shows, video games, cartoons, or millions of comics—Batman is proof you don’t need superpowers to be a superhero… and the poster boy for what a bad childhood can do to you.',
                'http://www.dccomics.com/sites/default/files/styles/whos_who/public/ww_batman_588c0b6b7e2e88.03395664_589110907cb905.89801067.jpg?itok=vuUz8U8D',
                '/characters/batman'),

            new Member('Wonder Woman',
                'bruce wayne', ['Dark Knight', ' Matches Malone', 'Caped Crusader'], ['super strength', 'flight', 'invulnerability', 'super speed', 'heat vision', 'freeze breath', 'x-ray vision', 'superhuman hearing', 'healing factor'],
                'gotham city',
                'CEO of Wayne Enterprises ',
                'Dark Knight. Caped Crusader. World’s Greatest Detective. Whatever you know him as, wherever you know him from—the blockbuster movies, TV shows, video games, cartoons, or millions of comics—Batman is proof you don’t need superpowers to be a superhero… and the poster boy for what a bad childhood can do to you.',
                'http://www.dccomics.com/sites/default/files/styles/whos_who/public/ww_wonderwoman_588c0ed37bfc73.21006806_589110f430e637.19481409.jpg?itok=BazXL1g2',
                '/characters/wonder-woman'),
            new Member('Green Lantern',
                'bruce wayne', ['Dark Knight', ' Matches Malone', 'Caped Crusader'], ['super strength', 'flight', 'invulnerability', 'super speed', 'heat vision', 'freeze breath', 'x-ray vision', 'superhuman hearing', 'healing factor'],
                'gotham city',
                'CEO of Wayne Enterprises ',
                'Dark Knight. Caped Crusader. World’s Greatest Detective. Whatever you know him as, wherever you know him from—the blockbuster movies, TV shows, video games, cartoons, or millions of comics—Batman is proof you don’t need superpowers to be a superhero… and the poster boy for what a bad childhood can do to you.',
                'http://www.dccomics.com/sites/default/files/styles/whos_who/public/ww_greenlantern_588c0cbdb655b1.03755951_58911193b86ee0.18027458.jpg?itok=_l5Tds6G',
                '/characters/green-lantern')
        ];
        this.leagueCoreMembers = [new Member('Superman',
                'kal-el', ['man of steel', 'sun of krypton', 'the adopted hero'], ['super strength', 'flight', 'invulnerability', 'super speed', 'heat vision', 'freeze breath', 'x-ray vision', 'superhuman hearing', 'healing factor'],
                'metropolis',
                'reporter',
                'Look! Up in the sky! It’s a bird! It’s a plane! It’s…Well, you know how it ends, don’t you? It’s a sentence so iconic, there are probably kids shouting it in Swahili as you read this.',
                'http://www.dccomics.com/sites/default/files/styles/whos_who/public/ww_superman_588c0b2b7e4894.14006222_589110299aa510.60892721.jpg?itok=0O5JEhrd',
                '/characters/superman'),
            new Member('Batman',
                'bruce wayne', ['Dark Knight', ' Matches Malone', 'Caped Crusader'], ['super strength', 'flight', 'invulnerability', 'super speed', 'heat vision', 'freeze breath', 'x-ray vision', 'superhuman hearing', 'healing factor'],
                'gotham city',
                'CEO of Wayne Enterprises ',
                'Dark Knight. Caped Crusader. World’s Greatest Detective. Whatever you know him as, wherever you know him from—the blockbuster movies, TV shows, video games, cartoons, or millions of comics—Batman is proof you don’t need superpowers to be a superhero… and the poster boy for what a bad childhood can do to you.',
                'http://www.dccomics.com/sites/default/files/styles/whos_who/public/ww_batman_588c0b6b7e2e88.03395664_589110907cb905.89801067.jpg?itok=vuUz8U8D',
                '/characters/batman'),

            new Member('Wonder Woman',
                'bruce wayne', ['Dark Knight', ' Matches Malone', 'Caped Crusader'], ['super strength', 'flight', 'invulnerability', 'super speed', 'heat vision', 'freeze breath', 'x-ray vision', 'superhuman hearing', 'healing factor'],
                'gotham city',
                'CEO of Wayne Enterprises ',
                'Dark Knight. Caped Crusader. World’s Greatest Detective. Whatever you know him as, wherever you know him from—the blockbuster movies, TV shows, video games, cartoons, or millions of comics—Batman is proof you don’t need superpowers to be a superhero… and the poster boy for what a bad childhood can do to you.',
                'http://www.dccomics.com/sites/default/files/styles/whos_who/public/ww_wonderwoman_588c0ed37bfc73.21006806_589110f430e637.19481409.jpg?itok=BazXL1g2',
                '/characters/wonder-woman'),
            new Member('Green Lantern',
                'bruce wayne', ['Dark Knight', ' Matches Malone', 'Caped Crusader'], ['super strength', 'flight', 'invulnerability', 'super speed', 'heat vision', 'freeze breath', 'x-ray vision', 'superhuman hearing', 'healing factor'],
                'gotham city',
                'CEO of Wayne Enterprises ',
                'Dark Knight. Caped Crusader. World’s Greatest Detective. Whatever you know him as, wherever you know him from—the blockbuster movies, TV shows, video games, cartoons, or millions of comics—Batman is proof you don’t need superpowers to be a superhero… and the poster boy for what a bad childhood can do to you.',
                'http://www.dccomics.com/sites/default/files/styles/whos_who/public/ww_greenlantern_588c0cbdb655b1.03755951_58911193b86ee0.18027458.jpg?itok=_l5Tds6G',
                '/characters/green-lantern'),
            new Member('The Flash',
                'bruce wayne', ['Dark Knight', ' Matches Malone', 'Caped Crusader'], ['super strength', 'flight', 'invulnerability', 'super speed', 'heat vision', 'freeze breath', 'x-ray vision', 'superhuman hearing', 'healing factor'],
                'gotham city',
                'CEO of Wayne Enterprises ',
                'Dark Knight. Caped Crusader. World’s Greatest Detective. Whatever you know him as, wherever you know him from—the blockbuster movies, TV shows, video games, cartoons, or millions of comics—Batman is proof you don’t need superpowers to be a superhero… and the poster boy for what a bad childhood can do to you.',
                'http://www.dccomics.com/sites/default/files/styles/whos_who/public/ww_flash_588c0c78096793.56539878_58911183a7a817.13114786.jpg?itok=51sOwUR9',
                '/characters/the-flash'),
            new Member('Aquaman',
                'bruce wayne', ['Dark Knight', ' Matches Malone', 'Caped Crusader'], ['super strength', 'flight', 'invulnerability', 'super speed', 'heat vision', 'freeze breath', 'x-ray vision', 'superhuman hearing', 'healing factor'],
                'gotham city',
                'CEO of Wayne Enterprises ',
                'Dark Knight. Caped Crusader. World’s Greatest Detective. Whatever you know him as, wherever you know him from—the blockbuster movies, TV shows, video games, cartoons, or millions of comics—Batman is proof you don’t need superpowers to be a superhero… and the poster boy for what a bad childhood can do to you.',
                'http://www.dccomics.com/sites/default/files/styles/whos_who/public/ww_aquaman_588c0ba8f18257.29894859_589111638cff75.10820220.jpg?itok=OPGnWStb',
                '/characters/aquaman'),
            new Member('cyborg',
                'bruce wayne', ['Dark Knight', ' Matches Malone', 'Caped Crusader'], ['super strength', 'flight', 'invulnerability', 'super speed', 'heat vision', 'freeze breath', 'x-ray vision', 'superhuman hearing', 'healing factor'],
                'gotham city',
                'CEO of Wayne Enterprises ',
                'Dark Knight. Caped Crusader. World’s Greatest Detective. Whatever you know him as, wherever you know him from—the blockbuster movies, TV shows, video games, cartoons, or millions of comics—Batman is proof you don’t need superpowers to be a superhero… and the poster boy for what a bad childhood can do to you.',
                'http://www.dccomics.com/sites/default/files/styles/whos_who/public/ww_cyborg_588c0bec1db114.91404563_589111406dd3c2.36803058.jpg?itok=E9zlLUra',
                '/characters/cyborg')
        ];
        this.onMemberSelect = new EventEmitter();
    }

    resolve(activatedRouteSnapshot: ActivatedRouteSnapshot, routerStateSnapshot: RouterStateSnapshot):
        Observable |
        Promise | [] {
            const promise = new Promise((res, rej) => {
                setInterval(() => {
                    res(this.leagueCoreMembers);
                }, 2000);
            });
            return promise;
        }
};