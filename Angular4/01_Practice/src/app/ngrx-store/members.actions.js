import {
    Action
} from '@ngrx/store';

export const ADD_MEMBER = 'ADD_MEMBER';

export class AddCoreMember {
    type = ADD_MEMBER;
    payLoad;
}
export type CoreMembersActions = AddCoreMember;