import React, { useState } from "react";
import Logo from "../assets/pizzaLogo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/contact"> Contactanos </Link>
          <Link to="/about"> Acerca De </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/contact"> Contactanos </Link>
        <Link to="/about"> Nosotros</Link>  
                     
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
      <Link to="/menu"><button>Suscribete</button></Link>
    </div>
  );
}

export default Navbar;
