import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css";

function Card({ title, image,desc }) {
  return (
    <div className="col g-col-4 mycard m-3">
      <h2>{title}</h2>
      <div className="img-div">
        <img src={image} alt="myimg" />
      </div>
      <div className="card-desc">
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default Card;
