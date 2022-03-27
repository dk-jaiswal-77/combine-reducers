import {createStore, combineReducers} from "redux";

import { todoReducer } from "./todo/reducer";
import { authReducer } from "./auth/reducer";

const rootReducer = combineReducers({
    todo : todoReducer, 
    authState : authReducer
});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());