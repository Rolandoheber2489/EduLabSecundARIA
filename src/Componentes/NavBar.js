import React from "react";
import { Link } from "react-router-dom";
import "../Estilos/App.css"; // Asegúrate de que este archivo esté importado correctamente

const navItems = [
  { to: "/", label: "Iniciar sesión" },
  { to: "/estudiantes", label: "Estudiantes" },
  { to: "/quienes-somos", label: "Quiénes somos" },
  { to: "/contacto", label: "Contacto" },
];

const Navbar = () => (
  <nav className="navbar navbar-expand-lg custom-navbar">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">
        <img
          src={process.env.PUBLIC_URL + "/Images/EDULAB-logo-blanco.png"}
          className="card-img-top"
          alt="Logo"
          id="Logo"
        />
        EduLab SecundARIA
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav nav-items-right"> {/* Aplica la clase aquí */}
          {navItems.map((item, index) => (
            <li className="nav-item" key={index}>
              <Link className="nav-link" to={item.to}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <form className="d-flex ms-3" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Buscar"
            aria-label="Buscar"
          />
        </form>
      </div>
    </div>
  </nav>
);

export default Navbar;
