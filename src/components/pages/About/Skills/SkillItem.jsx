import React from "react";

const SkillItem = (props) => {
  const { title, percentage } = props.skill;
  return (
    <div className="w-full md:w-1/2">
      <div className="mb-4 md:mx-4">
        <div className="flex justify-between items-center mb-1">
          <h5 className="text-md text-gray-400 font-normal  ">{title}</h5>
          <span className="text-md text-gray-400 font-bold">
            {percentage}
          </span>
        </div>
        <div className="w-full bg-gray-200 relative h-2 rounded">
          <div
            className="absolute h-full left-0 top-0 bg-gray-400 rounded"
            style={{ width: `${percentage}` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SkillItem;
