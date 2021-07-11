import React from "react";
import worker1 from "../../../images/team/worker_1.jpg";
import worker2 from "../../../images/team/worker_2.jpg";
import worker3 from "../../../images/team/worker_3.jpg";
import worker4 from "../../../images/team/worker_4.jpg";
import Worker from "./Worker/Worker";
import "./Team.scss";

const Team = () => {
  const workersData = [
    { name: "Andrzej", workplace: "Business Consultant", image: worker1 },
    { name: "Krzychu", workplace: "Technology Consultant", image: worker2 },
    { name: "Staszek", workplace: "Chainsaw Expert", image: worker3 },
    { name: "Tomek", workplace: "Cutting Expert", image: worker4 },
  ];

  const workers = workersData.map((worker) => (
    <Worker key={worker.name} worker={worker} />
  ));

  return (
    <>
      <div className="about">
        We provide full professionalism in our industry. Our team will take care
        of your business completely. Do you have a wood problem? Give it to us
        and enjoy your day.
      </div>
      <div className="employees">{workers}</div>
    </>
  );
};

export default Team;
