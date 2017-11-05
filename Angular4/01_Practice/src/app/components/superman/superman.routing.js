//Import core modules
import {
    NgModule
} from '@angular/core';
import {
    RouterModule
} from '@angular/router';

//Import feature modules

//Import components
import SupermanComponent from './superman.component';

const routes: Routes = [{
    path: 'superman',
    component: SupermanComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export default class SupermanRoutingModule {

};