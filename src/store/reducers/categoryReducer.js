import {
  ADD_CATEGORY,
  DELETE_CATEGORY,
  FETCH_CATEGORIES,
} from "../actions/types";

const initialState = {
  categories: [],
  loading: true,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
      
    case ADD_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };

    case FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        loading: false,
      };

    case DELETE_CATEGORY:
      const categoryToKeep = state.categories.filter(
        (category) => category.id !== action.payload.categoryId
      );
      return {
        ...state,
        categories: categoryToKeep,
      };

    default:
      return state;
  }
};

export default categoryReducer;
