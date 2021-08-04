import React from "react";
import { Link } from "react-router-dom";

function MenuItem({ image, name, price }) {
  return (
    <div className="menuItem">
      <Link to="/Art1"><button>
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> {price} </p>
      <div>
      </div>
      </button></Link>
    </div>
  );
}

export default MenuItem;
