import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./rootReducer";

const store = createStore(reducer, composeWithDevTools());
export default store;
