import React from "react";
import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <div className="contactReg"><h1> Registro Gratis: </h1><h2>Analizamos SIN COSTO la posibilidad de defender tus Multas</h2></div>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Nombre Completo</label>
          <input name="name" placeholder="Registra Tu Nombre Completo..." type="text" />
          <label htmlFor="email">E-mail</label>
          <input name="email" placeholder="Registra Tu E-mail..." type="email" />
          <label htmlFor="message">Mensaje</label>
          <textarea
            rows="6"
            placeholder="Cual es tu Mensaje..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Enviar Mensaje</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
