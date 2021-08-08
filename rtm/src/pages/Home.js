import { SwipeableDrawer } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.png";
import MySwiper from "../components/swiper.js";
import Typical from 'react-typical';



import "../styles/Home.css";
import "../styles/Menu.css";


function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
      <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>

        <h1>Recupera 
        <div className="Typ">
        tu 
        <Typical
        loop={Infinity}
        wrapper="b"
        steps={[
          ' Tiempo',
          7000,
          ' Dinero',
          7000,
          ' Multa',
          9000,
        ]}
        />
      </div>
        
        </h1>
           
        <p> No pierdas el tiempo con tus Multas, Analizamos sin costo la posibilidad de defender tus Multas</p>
        <Link to="/Contact">
          <button> Registra tu Multa </button>
        </Link>
      </div>
  
       <MySwiper/>
      </div>
  





)

}



export default Home;
