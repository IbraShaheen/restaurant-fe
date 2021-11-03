import { combineReducers } from "redux";
import authReducer from "./authReducer";
import gallaryReducer from "./gallaryReducer";


const rootReducer = combineReducers({
   user: authReducer,
   images: gallaryReducer
  })

  export default rootReducer;