import React from "react";

const SkillList = ({src, skill}) => {
  return (
    <span>
      <img src={src} alt="checkMark icon" />
      <p>{skill}</p>
    </span>
  );
};

export default SkillList;
