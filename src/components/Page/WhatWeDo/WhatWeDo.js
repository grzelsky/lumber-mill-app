import React from "react";
import kantowki from "../../../images/weCanDo/kantowki.jpg";
import wycinka from "../../../images/weCanDo/wycinka.jpg";
import deski from "../../../images/weCanDo/deski.jpg";
import bale from "../../../images/weCanDo/bale.jpg";
import Product from "./Product/Product";
import "./WhatWeDo.scss";

const WhatWeDo = () => {
  const whatWeDoData = [
    {
      title: "scantlings",
      description: "scantlings are longer than wide and square in dimension",
      image: kantowki,
    },
    {
      title: "deforestation",
      description: "we cut everything you want",
      image: wycinka,
    },
    {
      title: "planks",
      description: "a plank is timber that is flat, elongated, and rectangular",
      image: deski,
    },
    {
      title: "logs",
      description: "logs are good as a wood pillars",
      image: bale,
    },
  ];
  const whatWeDo = whatWeDoData.map((product) => (
    <Product key={product.title} product={product} />
  ));
  return (
    <>
      <h1 className="productsTitle">We can offer you plenty of products</h1>
      <div className="products">{whatWeDo}</div>
    </>
  );
};

export default WhatWeDo;
