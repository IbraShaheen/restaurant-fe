import { combineReducers } from "redux";
import authReducer from "./authReducer";
import categoryReducer from "./categoryReducer";
import dishReducer from "./dishReducer";
import gallaryReducer from "./gallaryReducer";


const rootReducer = combineReducers({
   user: authReducer,
   images: gallaryReducer,
   categories: categoryReducer,
   dishes: dishReducer
  })

  export default rootReducer;