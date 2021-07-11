import React from "react";
import "./Worker.scss";
const Worker = ({ worker }) => {
  const { name, workplace, image } = worker;
  return (
    <div className="worker">
      <img src={image} alt="" />
      <h3>{name}</h3>
      <p>{workplace}</p>
    </div>
  );
};

export default Worker;
