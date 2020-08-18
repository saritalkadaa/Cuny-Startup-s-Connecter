import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import App from "./App";
import { BrowserRouter as Router} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import index from "./js/index"; //needed to get store.getState() in console


render(
  // the provider wraps the App so that the store exists in the app
  <Provider store={store}>   
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
