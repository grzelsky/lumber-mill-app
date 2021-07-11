import React from "react";
import "./Partner.scss";

const Partner = ({ partner }) => {
  const { title, title2, name, image } = partner;
  return (
    <div className={title2}>
      <div className={title}>
        <img src={image} alt="" />
      </div>
      <h3>{name}</h3>
    </div>
  );
};

export default Partner;
