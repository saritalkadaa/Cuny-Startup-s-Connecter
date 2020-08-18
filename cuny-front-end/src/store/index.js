import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";


//for API Calling, but Saga can be used as well
import thunk from "redux-thunk"; 


const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //store enhancer is a middleware that adds extra functionality, takes care of asynchronous calls


const store = createStore(rootReducer,
    storeEnhancers(applyMiddleware(thunk))
);

export default store;
