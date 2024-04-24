import React from "react";
import "./DestinationStyle.css";

function DestinationData(props) {
  return (
    <div className={props.className}>
      <div className="destinationText">
        <h2>{props.heading}</h2>
        <p>{props.text}</p>
      </div>
      <div className="image">
        <img src={props.img1} />
        <img alt="img" src={props.img2} className="imgAni2" />
      </div>
    </div>
  );
}

export default DestinationData;
