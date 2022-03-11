import React from "react";

const NameTag = (props) => {
  const deleteByIndex = () => props.removeName(props.index);

 return (
  <div className="name-tag">
    <h3 className="title">HELLO</h3>
    <p className="subtitle">My name is</p>
    <h2 className="name">{props.name}</h2>
    <span onClick={deleteByIndex} className="name-tag_delete">
      x
    </span>
  </div>
);
 };

export default NameTag;


