import { createStore } from "redux";
import rootReducer from "../reducers";

const globalState = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default globalState;
