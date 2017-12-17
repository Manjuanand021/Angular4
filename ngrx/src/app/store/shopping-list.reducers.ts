import * as ShoppingListActions from './shopping-list.actions';
import { Ingredient } from '../shared/ingredient.model';

const initialState = {
    ingredients: [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ],
    editedIngredient: null,
    editedIngredientIndex: -1
};

export function ShppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
    switch (action.type) {
        case ShoppingListActions.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: [...state.ingredients, action.payLoad]
            }
        case ShoppingListActions.ADD_INGREDIENTS:
            return {
                ...state,
                ingredients: [...state.ingredients, ...action.payLoad]
            }
        case ShoppingListActions.UPDATE_INGREDIENT:
            const ingredient = state.ingredients[state.editedIngredientIndex];
            const updatedIngredient = {
                ...ingredient,
                ...state.editedIngredient
            };
            const updatedIngredients = [...state.ingredients];
            updatedIngredients[state.editedIngredientIndex] = updatedIngredient;
            return {
                ...state,
                ingredients: updatedIngredients
            }
        case ShoppingListActions.DELETE_INGREDIENT:
            const ingredients = [...state.ingredients];
            ingredients.splice(state.editedIngredientIndex, 1);
            return {
                ...state,
                ingredients: ingredients
            }
        case ShoppingListActions.START_EDIT:
            const editedIngredient = { ...state.ingredients[action.payLoad] };
            return {
                ...state,
                editedIngredient: editedIngredient,
                editedIngredientIndex: action.payLoad
            }
        case ShoppingListActions.GET_TODOS_SUCCESS:
            return {
                ...state,
                ingredients: [
                    ...state.ingredients,
                    ...action.payLoad
                ]
            }
        default:
            return state;
    }
};
