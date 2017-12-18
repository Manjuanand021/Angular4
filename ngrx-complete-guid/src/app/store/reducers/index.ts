import {
  routerReducer,
  RouterReducerState,
  RouterStateSerializer
} from "@ngrx/router-store";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Params
} from "@angular/router";
import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

export interface State {
  routerReducer: RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
  routerReducer: routerReducer
};

export const getRouterstate = createFeatureSelector<
  RouterReducerState<RouterStateUrl>
>("routerReducer");

export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const { queryParams } = routerState.root;
    let state: ActivatedRouteSnapshot = routerState.root;
    while (state.firstChild) {
      state = state.firstChild;
    }
    const params = state.params; // const {params} = state; // destructuring

    return {
      url,
      queryParams,
      params
    };
  }
}
