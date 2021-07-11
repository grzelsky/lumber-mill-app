import React from "react";
import "./Step.scss";

const Step = ({ step }) => {
  const { title, title2, title3, description, image } = step;
  return (
    <div className={title3}>
      <div className={title2}>
        <img src={image} alt="" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Step;
