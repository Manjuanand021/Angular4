import {
    Action
} from '@ngrx/store';

export const ADD_MEMBER = 'ADD_MEMBER';

export class AddCoreMember {
    type: string = ADD_MEMBER;
    payLoad: any;
}
export type CoreMembersActions = AddCoreMember;