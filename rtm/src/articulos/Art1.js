import React from "react";
import GNIMG from "../assets/guardianacional.png";
import "../Astyles/Art1.css";
function Art1() {
  return (
    <div className="Art1">
      <div
        className="Art1Top"
        style={{ backgroundImage: `url(${GNIMG})` }}
      ></div>
      <div className="Art1Titulo">
      <h1> Articulo 1 </h1>
      </div>
      <div className="Art1Bottom">
     
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
          
        </p>
      </div>
    </div>
  );
}

export default Art1;
