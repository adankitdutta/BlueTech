import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser,setCurrentAdmin,logoutAdmin } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import RegisterAdmin from "./components/auth/RegisterAdmin";
import LoginAdmin from "./components/auth/LoginAdmin";
import PrivateRouteAdmin from "./components/private-route/PrivateRouteAdmin";
import DashboardAdmin from "./components/dashboard/DashboardAdmin";

import "./App.css";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  store.dispatch(setCurrentAdmin(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    store.dispatch(logoutAdmin());

    // Redirect to login
    window.location.href = "./login";
    window.location.href = "./loginAdmin";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar  />
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/registerAdmin" component={RegisterAdmin} />
            <Route exact path="/loginAdmin" component={LoginAdmin} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRouteAdmin exact path="/dashboardAdmin" component={DashboardAdmin} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
