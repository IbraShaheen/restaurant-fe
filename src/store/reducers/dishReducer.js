import {
  ADD_DISH,
  DELETE_DISH,
  EDIT_DISH,
  FETCH_DISHES,
} from "../actions/types";

const initialState = {
  dishes: [],
  loading: true,
};
const dishReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DISH:
      return {
        ...state,
        dishes: [...state.dishes, action.payload],
      };
    case FETCH_DISHES:
      return {
        ...state,
        dishes: action.payload,
        loading: false,
      };
    case DELETE_DISH:
      const dishesToKeep = state.dishes.filter(
        (dish) => dish.id !== action.payload.dishId
      );
      return {
        ...state,
        dishes: dishesToKeep,
      };
    case EDIT_DISH:
      return {
        ...state,
        dishes: state.dishes.map((dish) =>
          dish.id === action.payload.updatedDish.id
            ? action.payload.updatedDish
            : dish
        ),
      };
    default:
      return state;
  }
};

export default dishReducer;
