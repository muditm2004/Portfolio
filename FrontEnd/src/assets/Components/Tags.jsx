import React from "react";

export default function Tags(props) {
  return (
    <div className="tag">
      <div className={props.className}>
      </div>
      <div className={`${props.className}Blur`}></div>
      {props.text}
    </div>
  );
}
