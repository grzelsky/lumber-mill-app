import React, { useState } from "react";
import Page from "./components/Page/Page";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import backgroundMain1 from "./images/background/background_1.jpg";
import backgroundMain2 from "./images/background/background_2.jpg";
import backgroundMain3 from "./images/background/background_3.jpg";
import backgroundLogs from "./images/background/background_4.jpg";
import backgroundAxe from "./images/background/background_5.jpg";
import backgroundContact from "./images/background/contact.jpg";

let counter = 0;

const App = () => {
  const [backgroundMain, setBackgroundMain] = useState(backgroundMain1);
  const [txt, setTxt] = useState(
    "Get your wood business on higher level with lumber solutions"
  );

  const handleClick = (e) => {
    if (
      e.target.classList.contains("fa-angle-right") ||
      e.target.classList.contains("fa-angle-left")
    ) {
      e.target.classList.contains("fa-angle-right") ? counter++ : counter--;
      if (counter === 1) {
        setBackgroundMain(backgroundMain2);
        setTxt("Our partnership is your success");
      } else if (counter === 2) {
        setBackgroundMain(backgroundMain3);
        setTxt("Build the future with the sharp way");
      } else if (counter > 2) {
        counter = 0;
        setBackgroundMain(backgroundMain1);
        setTxt("Get your wood business on higher level with lumber solutions");
      } else if (counter < 0) {
        counter = 2;
        setBackgroundMain(backgroundMain3);
        setTxt("Build the future with the sharp way");
      } else if (counter === 0) {
        setBackgroundMain(backgroundMain1);
        setTxt("Get your wood business on higher level with lumber solutions");
      }
    }
  };
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <header style={{ backgroundImage: `url(${backgroundMain})` }}>
                <Header click={handleClick} txt={txt} />
              </header>
            )}
          />
          <Route
            path="/whatwedo"
            render={() => (
              <header style={{ backgroundImage: `url(${backgroundLogs})` }}>
                <Header />
              </header>
            )}
          />
          <Route
            path="/ourteam"
            render={() => (
              <header style={{ backgroundImage: `url(${backgroundAxe})` }}>
                <Header />
              </header>
            )}
          />
          <Route
            path="/contact"
            render={() => (
              <header style={{ backgroundImage: `url(${backgroundContact})` }}>
                <Header />
              </header>
            )}
          />
        </Switch>
        <main>
          <Page />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
};

export default App;
