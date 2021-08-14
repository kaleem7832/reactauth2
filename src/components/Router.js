import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Dashboard from "./dashboard";
import NotFound from "./404";
import Auth from "../auth/auth";
const Router = (props) => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={SignUp} />
    <PrivateRoute exact path="/" component={Dashboard} />
    <PrivateRoute exact path="/dashboard" component={Dashboard} />
    <Route path="*" component={NotFound} />
  </Switch>
);
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      Auth.getAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login"
          }}
        />
      )
    }
  />
);
export default Router;
