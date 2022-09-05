import React from "react";
import SkillItem from "./SkillItem";

const skillData = [
  {
    id: 1,
    title: "Javascript",
    percentage: "90%",
  },  
  {
    id: 3,
    title: "ExpressJS",
    percentage: "90%",
  },
  {
    id: 2,
    title: "ReactJS",
    percentage: "90%",
  },
  {
    id: 6,
    title: "Html, Css, TailwindCSS",
    percentage: "85%",
  },
  
  {
    id: 5,
    title: "PostgreSQL",
    percentage: "70%",
  },
  {
    id: 4,
    title: "Adobe Illustrator, PhotoShop",
    percentage: "90%",
  },
  {
    id: 7,
    title: "Sequelize",
    percentage: "90%",
  },
  
  {
    id: 8,
    title: "Git, Github",
    percentage: "80%",
  },
];

const Skills = () => {
  return (
    <div className="py-4">
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="md:mx-4">
            <h3 className="text-2xl text-main-800 font-bold mb-4">Skills</h3>
          </div>
        </div>
        {skillData.map((skill, id) => (
          <SkillItem skill={skill} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
