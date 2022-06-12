import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./cards/Card";
import { data } from "../helper/data";

function Container() {
  return (
    <div className="container w-75 m-auto mt-5">
      <div className="row g-cols-4">
          {/* <Card/> */}
        {data.map((city) => (
          <Card title={city.title} image={city.image} desc={city.desc} />
        ))}
      </div>
    </div>
  );
}

export default Container;
