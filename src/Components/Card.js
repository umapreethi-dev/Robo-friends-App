import React from "react";
import "../css/card.css";

const Card = (props) => {
  return (
    <div className="robot">
      <img alt="robots" src={`https://robohash.org/${props.id}`} width="200px" height="200px"/>
      <div>
        <h2>{props.name}</h2>
        <p>{props.email}</p>
      </div>
    </div>
  );
};

export default Card;
