//W Page są przekierowania na podstrony HomePage, Team, WhatWeDo, Contact,
import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import WhaWeDo from "./WhatWeDo/WhatWeDo";
import Team from "./Team/Team";
import Contact from "./Contact/Contact";

const Page = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/whatwedo" exact component={WhaWeDo} />
        <Route path="/ourteam" exact component={Team} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </>
  );
};

export default Page;
