import { createStore } from 'redux';

const initialState = {
  name: '',
  category: '',
  authorFirst: '',
  authorLast: '',
  ingredients: [],
  instructions: [],
  recipes: []
};

export const UPDATE_NAME = 'UPDATE_NAME';
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export const UPDATE_AUTHOR_FIRST = 'UPDATE_AUTHOR_FIRST';
export const UPDATE_AUTHOR_LAST = 'UPATE_AUTHOR_LAST';
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';
export const ADD_INSTRUCTION = 'ADD_INSTRUCTION';
export const ADD_RECIPE = 'ADD_RECIPE';
export const CLEAR = 'CLEAR';

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch(action.type) {
    case UPDATE_NAME:
      return { ...state, name: payload }
    
    case UPDATE_CATEGORY:
      return { ...state, category: payload }

    case UPDATE_AUTHOR_FIRST:
      return { ...state, authorFirst: payload }
    
    case UPDATE_AUTHOR_LAST:
      return { ...state, authorLast: payload }
    
    case ADD_INGREDIENTS:
      const newIngredients = [ ...state.ingredients, payload ]
      return { ...state, ingredients: newIngredients }

    case ADD_INSTRUCTION:
      const newInstructions = [ ...state.instructions, payload ]
      return { ...state, instructions: newInstructions } 

    case ADD_RECIPE:
      const { name, category, authorFirst, authorLast, ingredients, instructions } = state; //this line is to destructure the state of all of our results so far
      const recipe = { name, category, authorFirst, authorLast, ingredients, instructions }; // this line combines all of those destructured variables to a new object
      const newRecipes = [ ...state.recipes, recipe ]; // spreads and adds this object onto a new const named newRecipes
      return { ...state, recipes: newRecipes }; // returning and having our recipes array equal to wwhat we've got so far

    case CLEAR:
      return {
        ...state,
        name: '',
        category: '',
        authorFirst: '',
        authorLast: '',
        ingredients: [],
        instructions: []
      }

    default:
      return state;
  }
};

export default createStore(reducer);