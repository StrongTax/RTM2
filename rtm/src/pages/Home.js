import { SwipeableDrawer } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.png";
import MySwiper from "../components/swiper.js";

import "../styles/Home.css";
import "../styles/Menu.css";


function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> No pierdas el tiempo con tus Multas </h1>
        <p> Analizamos sin costo la posibilidad de defender tus Multas</p>
        <Link to="/Contact">
          <button> Registra tu Multa </button>
        </Link>
      </div>
       <MySwiper/>
      </div>
  





)

}



export default Home;
