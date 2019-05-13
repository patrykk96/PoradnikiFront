import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

import AdminLayout from "layouts/Admin/Admin.jsx";
import AuthLayout from "layouts/Auth/Auth.jsx";
import Logout from './layouts/Auth/Logout';
import ConfirmAccount from './layouts/Auth/ConfirmAccount';
import ChangePassword from './layouts/Auth/ChangePassword';
import initializeApi from "../src/api/initialize";

import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";

import authReducer from "./store/reducers/authReducer";
import gameReducer from "./store/reducers/gameReducer";
import userReducer from "./store/reducers/userReducer";

initializeApi();
const hist = createBrowserHistory();



const rootReducer = combineReducers({
  authReducer: authReducer,
  gameReducer: gameReducer,
  userReducer: userReducer
});



const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);


const app = (
  <Provider store={store}>
    <BrowserRouter>
      <Router history={hist}>
      <Switch>
        <Route path="/confirmAccount/:username/:code" component={ConfirmAccount} />
        <Route path="/changePassword/:username/:code" component={ChangePassword} />
        <Route path="/admin" render={props => <AdminLayout {...props} />} />
        <Route path="/auth" render={props => <AuthLayout {...props} />} />
        <Route path="/logout" component={Logout}/>
        <Redirect from="/" to="/admin/dashboard" />
      </Switch>
      </Router>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app,
  document.getElementById("root")
);
