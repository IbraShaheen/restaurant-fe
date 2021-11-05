import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import { checkForToken } from "./actions/authActions";
import { fetchImages } from "./actions/gallaryActions";
import { fetchCategories } from "./actions/categoryActions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

store.dispatch(checkForToken());
// fetch action in components
//TODO

store.dispatch(fetchImages())
store.dispatch(fetchCategories())

export default store;