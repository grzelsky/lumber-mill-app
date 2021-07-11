import React from "react";
import Step from "./Step/Step";
import "./Intro.scss";
import briefcase from "../../../../images/introIcons/briefcase.png";
import bulb from "../../../../images/introIcons/bulb.png";
import handshake from "../../../../images/introIcons/handshake.png";

const Intro = () => {
  const stepsData = [
    {
      title: "first joint steps",
      title2: "briefcase",
      title3: "solutions",
      description:
        "We will help you enter a higher level and uncover your new opportunities with our equipment. How do we do it?",
      image: briefcase,
    },
    {
      title: "Professional solutions",
      title2: "bulb",
      title3: "ideas",
      description:
        "We use professional solutions that will help you in your business. We guarantee their effectiveness and professionalism and, above all, your satisfaction.",
      image: bulb,
    },
    {
      title: "Innovative ideas",
      title2: "handshake",
      title3: "partnersShip",
      description:
        "We guarantee you innovative methods of wood management. With us, you will solve your problems and tasks in a modern and efficient manner.",
      image: handshake,
    },
  ];

  const steps = stepsData.map((step) => <Step key={step.title} step={step} />);
  return (
    <>
      <div className="intro">
        <div className="introTitle">
          <h2>first joint steps</h2>
          <p>
            We will help you enter a higher level and uncover your new
            opportunities with our equipment. How do we do it?
          </p>
        </div>
        <div className="steps">{steps}</div>
      </div>
    </>
  );
};

export default Intro;
