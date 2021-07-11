import React from "react";
import "./Partners.scss";
import Partner from "./Partner/Partner";
import sawMill from "../../../../images/partnersIcons/sawmill.png";
import viking from "../../../../images/partnersIcons/viking.png";
import house from "../../../../images/partnersIcons/house.png";
import deforestation from "../../../../images/partnersIcons/deforestation.png";
import woodcutter from "../../../../images/partnersIcons/woodcutter.png";
import woodworking from "../../../../images/partnersIcons/woodworking.png";

const Partners = () => {
  const partnersData = [
    {
      title: "sawMwill",
      title2: "partner1",
      name: "cut solutions",
      image: sawMill,
    },
    {
      title: "viking",
      title2: "partner2",
      name: "cviking WoodWork",
      image: viking,
    },
    {
      title: "house",
      title2: "partner3",
      name: "oodenHouse.co",
      image: house,
    },
    {
      title: "deforestation",
      title2: "partner4",
      name: "deforestation mates",
      image: deforestation,
    },
    {
      title: "woodcutter",
      title2: "partner5",
      name: "sureCut.bros",
      image: woodcutter,
    },
    {
      title: "woodworking",
      title2: "partner6",
      name: "woodworking",
      image: woodworking,
    },
  ];
  const partners = partnersData.map((partner) => (
    <Partner key={partner.name} partner={partner} />
  ));
  return (
    <>
      <div className="partners">
        <div className="partnersTitle">
          <h2>Partnered with Industry Leaders</h2>
          <p>
            We partner with world className technology vendors to develop and
            deploy efficient, scalable technology solutions. In doing so, we
            create the best possible competitive edge for our clients.
          </p>
        </div>
        <div className="partnersLogos">{partners}</div>
      </div>
    </>
  );
};

export default Partners;
