import React from "react";
import Intro from "./Intro/Intro";
import Partners from "./Partners/Partners";
import Trusted from "./Trusted/Trusted";
import Question from "./Question/Question";

const HomePage = () => {
  return (
    <>
      <Intro />
      <Partners />
      <Trusted />
      <Question />
    </>
  );
};

export default HomePage;
