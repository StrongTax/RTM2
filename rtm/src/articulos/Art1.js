import React from "react";
import MultiplePizzas from "../assets/guardianacional.jpg";
import "../Astyles/Art1.css";


function Art1() {
  return (
    <div className="Art1">
        <div className="Tag">Guardia Nacional</div>
         <div className="Art1Titulo"> Acerca De Recupera Tus Multas</div>
      <div
        className="Art1Top"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="Art1Autor">Alfredo Hernandez</div>
      <div className="Art1Bottom">
       
        <p>
        Las Multa o infracciones impuestas por la Guardia Nacional, deben ser impuestas de conformidad con nuestra Constitución, siempre respetando los derechos fundamentales de los ciudadanos, a fin de que estos, estén en la posibilidad de constatar que la  Guardia Nacional es una autoridad competente, por lo que al carecer de elementos que constitucionales estas serán ilegales e inconstitucionales.
        Ejemplo de ello, puede darse al momento de imponerse: <br></br>
        <br></br>•  Multa en cantidad total de 60 Unidades de Medica y Actualización, por rebasar el límite de velocidad máxima de 110 KM/H en exceso mayor a 120 KM/Hora<br></br>
        <br></br>•	Sanción de 50 veces el valor diario de la Unidad de Medida y Actualización equivalente a $4,344.00, por infracciones al Reglamento Sobre el Peso, Dimensiones y Capacidad de los Vehículos de Autotransporte que transitan en los Caminos y Puentes de Jurisdicción Federal<br></br>
        <br></br>•	Multa por efectuar transporte privado de carga sin el permiso correspondiente, en cantidad total de 100 Unidades de Medida y Actualización<br></br>
        <br></br>•	Multa por el importe de doscientos cincuenta veces la Unidad de Medida y Actualización por “operar con exceso de las dimensiones de lo largo de lo autorizado en la norma respectiva, más de 100cm”<br></br>
        </p>
      </div>
      <br></br>
    </div>
  );
}

export default Art1;
