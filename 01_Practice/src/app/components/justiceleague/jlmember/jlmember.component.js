import {
    Component,
    Input,
    Output,
    EventEmitter,
    ngOnChange,
    SimpleChanges,
    ngDoCheck,
    OnDestroy
} from '@angular/core';
import template from './jlmember.template.html';
import JusticeLeagueMembersService from '../../../services/jLeague-members.service';

@Component({
    selector: 'member',
    template: template
})
export default class JLMemberComponent {
    @Input('member-info') member;
    constructor(leaguemembersService: JusticeLeagueMembersService) {
        this._leaguemembersService = leaguemembersService;
    }

    navigateToMemberPage(memberName) {
        // this.onMemberClick.emit(memberName);
        this._leaguemembersService.onMemberSelect.emit(memberName);
    }
}