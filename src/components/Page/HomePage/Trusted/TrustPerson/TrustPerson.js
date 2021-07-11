import React from "react";
import "./TrustPerson.scss";

const TrustPerson = ({ trustPerson }) => {
  const { title, name, quote, image } = trustPerson;
  return (
    <div className={title}>
      <div className={name} style={{ backgroundImage: `url(${image})` }}></div>
      <h3>{quote}</h3>
    </div>
  );
};

export default TrustPerson;
