import { Action } from "@ngrx/store";
import { Ingredient } from "app/shared/ingredient.model";

// tslint:disable-next-line:eofline
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const GET_TODOS = 'GET_TODOS';
export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';
export const UPDATE_INGREDIENT = 'UPDATE_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENTS';
export const START_EDIT = 'START_EDIT';

export class AddIngredient implements Action {
    readonly type = ADD_INGREDIENT;
    constructor(public payLoad: Ingredient) { }
};
export class AddIngredients implements Action {
    readonly type = ADD_INGREDIENTS;
    constructor(public payLoad: Ingredient[]) { }
};
export class UpdateIngredient implements Action {
    readonly type = UPDATE_INGREDIENT;
    constructor(public payLoad: Ingredient) { }
};
export class DeleteIngredient implements Action {
    readonly type = DELETE_INGREDIENT;
};
export class StartEdit implements Action {
    readonly type = START_EDIT;
    constructor(public payLoad: number) { }
};
export class GetTodos implements Action {
    readonly type = GET_TODOS;
    constructor() { }
};
export class GetTodosSuccess implements Action {
    readonly type = GET_TODOS_SUCCESS;
    constructor(public payLoad: Ingredient[]) { }
};

export type ShoppingListActions = AddIngredient |
    AddIngredients |
    UpdateIngredient |
    DeleteIngredient |
    StartEdit |
    GetTodos |
    GetTodosSuccess;
