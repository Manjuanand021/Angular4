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
        this.leagueCoreMembers = [{
                logoUrl: '../../../assets/images/superman_logo.png',
                description: `Look! Up in the sky! It’s a bird! It’s a plane! It’s…Well, you know how it ends, don’t you? It’s a sentence
                    so iconic, there are probably kids shouting it in Swahili as you read this. Man of Steel - When a young
                    boy discovers that he has extraordinary powers, he decides to find out about his origin. He then learns
                    to fight for Earth when it gets attacked by members of his own race`,
                navLink: '/superman'
            },
            {
                logoUrl: '../../../assets/images/batman_logo.png',
                description: ` Dark Knight. Caped Crusader. World’s Greatest Detective. Whatever you know him as, wherever you know him from—the blockbuster
                    movies, TV shows, video games, cartoons, or millions of comics—Batman is proof you don’t need superpowers
                    to be a superhero… and the poster boy for what a bad childhood can do to you.`,
                navLink: '/batman'
            },
            {
                logoUrl: '../../../assets/images/wonderwoman_logo.png',
                description: `OK, let’s just come out and say it: Wonder Woman is the most famous heroine of all time. No offense to the Lara Crofts, Buffys,
                    or Disney princesses of the world, but none of them have been plastered on as many magazine covers, adorned
                    as many T-shirts, or sold the countless comics, dolls, and action figures that Wonder Woman has. The
                    full package of beauty, brains, and brawn, she’s been a feminist icon since her star-spangled intro in
                    1941.`,
                navLink: '/wonder-woman'
            },
            {
                logoUrl: '../../../assets/images/green_lantern_logo.png',
                description: `Imagine if the ring on your finger was more than a piece of gaudy jewelry. Instead, it’s the universe’s most powerful weapon.
                    It can create whatever you wish out of pure energy, its might limited only by your imagination and will.
                    And with it comes exclusive membership to an exclusive intergalactic police force with alien officers
                    spanning the cosmos.`,
                navLink: '/green-lantern'
            },
            {
                logoUrl: '../../../assets/images/flash_logo.png',
                description: `Indy cars, bullet trains, supersonic aircraft… The Flash leaves them all in the dust. Barry Allen, a forensic scientist with
                    the Central City police force, is struck by lightning in a freak accident. When he wakes up after nine
                    months, he discovers that he can achieve great speeds.`,
                navLink: '/flash'
            },
            {
                logoUrl: '../../../assets/images/aquaman2_logo.png',
                description: `Make all the sushi jokes, YouTube spoofs, and SNL sketches you want, Aquaman’s been an icon for over seventy years. The King
                    of the Seven Seas. Reluctant ruler of Atlantis. A man who holds his own against heroes like Superman
                    and Wonder Woman. He’s so recognizable that when officials speak about the perils of sea pollution, they’ll
                    whip out Aquaman references to sound hip.`,
                navLink: '/aquaman'
            }
        ];
        this.onMemberSelect = new EventEmitter();
    }

    resolve(activatedRouteSnapshot: ActivatedRouteSnapshot, routerStateSnapshot: RouterStateSnapshot):
        Observable |
        Promise | [] {
            const promise = new Promise((res, rej) => {
                res(this.leagueCoreMembers);
            });
            return promise;
        }
};