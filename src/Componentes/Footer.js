// src/Componentes/Footer.js
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-white py-3">
      <p>&copy; 2024 Equipo Edulab. Todos los derechos reservados.</p>
      <nav>
        <Link to="/sobre-nosotros">Sobre Nosotros</Link> |
        <Link to="/contacto">Contacto</Link> |
        <Link to="/terminos">Términos de Servicio</Link> |
        <Link to="/privacidad">Política de Privacidad</Link>
      </nav>
      <div className="my-2">
        <a
          href="https://twitter.com/TuCuenta"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>{" "}
        |
        <a
          href="https://facebook.com/TuCuenta"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>{" "}
        |
        <a
          href="https://instagram.com/TuCuenta"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </div>
      <div className="my-2">
        <p>Contacto: contacto@gmail.com | +123 456 7890</p>
      </div>
      <div className="my-3">
        <form action="/suscripcion" method="post">
          <label htmlFor="email">Suscríbete a nuestro boletín:</label>
          <input type="email" id="email" name="email" required />
          <button type="submit">Suscribirse</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
