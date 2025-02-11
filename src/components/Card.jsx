import React from "react";
import Avatar from "./Avatar";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div className="Card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar src={props.img} />
      </div>
      <div className="bottom">
        <p className="info">{props.tel}</p>
        <p className="info">{props.email}</p>
      </div>
    </div>
  );
}

export default Card;
