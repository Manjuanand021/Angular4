import * as CoreMembersActions from './members.actions';


const initialState = {
    jLeagueCoreMembers: [{
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
        }
    ]
}

export function coreMembersReducer(state, action: CoreMembersActions.CoreMembersActions) {
    if (!state) {
        console.log('state is empty');
        state = initialState;
        console.log(state);
        console.log(action);
    }
    switch (action.type) {
        case CoreMembersActions.ADD_MEMBER:
            // return state;
            return {
                ...state,
                jLeagueCoreMembers: [...state.jLeagueCoreMembers, action.payLoad]
            }
        default:
            return state;
    }
}