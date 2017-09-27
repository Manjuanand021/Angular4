import {
    Component
} from '@angular/core';
import template from './justiceleague.template.html';
import Member from './member.model';

@Component({
    selector: 'league',
    template: template,
    styles: [`
    p{text-align:justify;}`]
})
export default class JusticeLeagueComponent {
    constructor() {
        this.coreMembers = [new Member('superman',
                'kal-el', ['man of steel', 'sun of krypton', 'the adopted hero'], ['super strength', 'flight', 'invulnerability', 'super speed', 'heat vision', 'freeze breath', 'x-ray vision', 'superhuman hearing', 'healing factor'],
                'metropolis',
                'reporter',
                'Look! Up in the sky! It’s a bird! It’s a plane! It’s…Well, you know how it ends, don’t you? It’s a sentence so iconic, there are probably kids shouting it in Swahili as you read this.'),
            new Member('batman',
                'bruce wayne', ['Dark Knight', ' Matches Malone', 'Caped Crusader'],
                'metropolis',
                'CEO of Wayne Enterprises ',
                'Dark Knight. Caped Crusader. World’s Greatest Detective. Whatever you know him as, wherever you know him from—the blockbuster movies, TV shows, video games, cartoons, or millions of comics—Batman is proof you don’t need superpowers to be a superhero… and the poster boy for what a bad childhood can do to you.'),
        ]
    }
}