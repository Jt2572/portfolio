import React from "react";
import { FaNodeJs, FaReact } from "react-icons/fa";
import ServiceItem from "./ServiceItem";

const serviceData = [
   {
    id: 1,
    icon: <FaReact />,
    title: "Frontend",
    description:
      "React / Redux  / Tailwind / Figma / Trello / Illustrator / Photoshop",
  },
  {
    id: 2,
    icon: [<FaNodeJs />],
    title: "Backend",
    description:
      "PostgreSQL / NodeJs / ExpressJs / Sequelize ",
  },
];

const Service = () => {
  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4">
        {serviceData.map((service, id) => (
          <ServiceItem service={service} key={id} />
        ))}
      </div>
    </section>
  );
};

export default Service;
