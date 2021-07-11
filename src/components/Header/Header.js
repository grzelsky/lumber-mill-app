import React from "react";
import { Route, Switch, NavLink } from "react-router-dom";

import Navigation from "./Navigation/Navigation";
import "./Header.scss";

const Header = ({ click, txt }) => {
  return (
    <>
      <Navigation />
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <div className="title">
              <h1>{txt}</h1>
              <i className="fas fa-angle-left" onClick={click}></i>
              <i className="fas fa-angle-right" onClick={click}></i>
              <NavLink to="/contact">
                <button>Make an appointment</button>
              </NavLink>
            </div>
          )}
        />
        <Route
          path="/whatwedo"
          exact
          render={() => (
            <div className="title">
              <h1>What we do?</h1>
            </div>
          )}
        />
        <Route
          path="/ourteam"
          exact
          render={() => (
            <div className="title">
              <h1>Meet our team.</h1>
            </div>
          )}
        />
        <Route
          path="/contact"
          exact
          render={() => (
            <div className="title">
              <h1>Contact with us.</h1>
            </div>
          )}
        />
      </Switch>
    </>
  );
};

export default Header;
