import { combineReducers } from "redux";
import authReducer from "./authReducer";
import categoryReducer from "./categoryReducer";
import gallaryReducer from "./gallaryReducer";


const rootReducer = combineReducers({
   user: authReducer,
   images: gallaryReducer,
   categories: categoryReducer
  })

  export default rootReducer;