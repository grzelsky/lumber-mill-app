import React, { useState, useEffect } from "react";
import Page from "./components/Page/Page";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import background1 from "./images/background/background_1.jpg";
import background2 from "./images/background/background_2.jpg";
import background3 from "./images/background/background_3.jpg";
import background4 from "./images/background/background_4.jpg";
import background5 from "./images/background/background_5.jpg";
import contact from "./images/background/contact.jpg";

let counter = 0;

const App = () => {
  const [backgroundMain, setBackground] = useState(background1);
  const [backgroundLogs, setBackgroundLogs] = useState(background4);
  const [backgroundAxe, setBackgroundAxe] = useState(background5);
  const [backgroundContact, setBackgroundContact] = useState(contact);
  const [txt, setTxt] = useState(
    "Get your wood business on higher level with lumber solutions"
  );

  // preupload bgImages
  const source = backgroundMain;
  const [preLoadBackground, setPreLoadBackground] = useState(source);

  useEffect(() => {
    const img = new Image();
    img.src = source;
    img.onload = () => setPreLoadBackground(source);
    const bgLogs = new Image();
    bgLogs.src = backgroundLogs;
    bgLogs.onload = () => setBackgroundLogs(backgroundLogs);
    const bgAxe = new Image();
    bgAxe.src = backgroundAxe;
    bgAxe.onload = () => setBackgroundAxe(backgroundAxe);
    const bgContact = new Image();
    bgContact.src = backgroundContact;
    bgContact.onload = () => setBackgroundContact(backgroundContact);
  }, [source, backgroundLogs, backgroundAxe, backgroundContact]);

  const handleClick = (e) => {
    if (
      e.target.classList.contains("fa-angle-right") ||
      e.target.classList.contains("fa-angle-left")
    ) {
      e.target.classList.contains("fa-angle-right") ? counter++ : counter--;
      if (counter === 1) {
        setBackground(background2);
        setTxt("Our partnership is your success");
      } else if (counter === 2) {
        setBackground(background3);
        setTxt("Build the future with the sharp way");
      } else if (counter > 2) {
        counter = 0;
        setBackground(background1);
        setTxt("Get your wood business on higher level with lumber solutions");
      } else if (counter < 0) {
        counter = 2;
        setBackground(background3);
        setTxt("Build the future with the sharp way");
      } else if (counter === 0) {
        setBackground(background1);
        setTxt("Get your wood business on higher level with lumber solutions");
      }
    }
  };
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <header style={{ backgroundImage: `url(${preLoadBackground})` }}>
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
