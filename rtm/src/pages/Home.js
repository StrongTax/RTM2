import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.png";
import "../styles/Home.css";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";
import { principalArt } from "../helpers/MenuList copy";



function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> No pierdas tiempo con tus Multas </h1>
        <p> Analizamos sin costo la posibilidad de defender tus Multas</p>
        <Link to="/menu">
          <button> Registra tu Multa </button>
        </Link>
      </div>
      <div className="menuProcedimiento"></div>
    <div className="menu">
      <h1 className="menuTitle">Mas Articulos</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.Nombre}
              price={menuItem.Articulo}
            />
          );
        })}
      </div>

    </div>
    </div>
)

}



export default Home;
