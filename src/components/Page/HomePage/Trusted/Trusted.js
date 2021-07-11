import React from "react";
import "./Trusted.scss";
import TrustPerson from "./TrustPerson/TrustPerson";
import man from "../../../../images/trustedPpl/man.jpg";
import buisnesswoman from "../../../../images/trustedPpl/buisness-woman.jpg";
import granny from "../../../../images/trustedPpl/granny.jpg";

const Trusted = () => {
  const trustedPeopleData = [
    {
      title: "person1",
      name: "man",
      quote:
        "When I think about Lumber Solutions, three words come to mind: saw, scobs, resin.",
      image: man,
    },
    {
      title: "person2",
      name: "buisnesswoman",
      quote: "Lumber Solutions- best timber on the whole west.",
      image: buisnesswoman,
    },
    {
      title: "person3",
      name: "granny",
      quote: "Lumber Solutions found our problems and solved them.",
      image: granny,
    },
  ];
  const trustedPeople = trustedPeopleData.map((trustPerson) => (
    <TrustPerson key={trustPerson.name} trustPerson={trustPerson} />
  ));
  return (
    <>
      <div className="trusted">
        <div className="trustedTitle">
          <h2>Trusted by People</h2>
          <p>
            We don’t believe in good enough – we believe in well done. Our
            clients agree.
          </p>
        </div>
        <div className="trustedPeople">{trustedPeople}</div>
      </div>
    </>
  );
};

export default Trusted;
