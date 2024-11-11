import React from "react";
import { Link } from "react-router-dom";
import AtomScene from "./AtomScene";
import "./Quimica.css";

const TopicCard = ({ title, description }) => (
  <div className="card">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const Quimica = () => {
  return (
    <div className="custom-container">
      {/* Barra de navegación */}
      <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src={`${process.env.PUBLIC_URL}/Images/Logo.png`}
              id="Logo"
              alt="Logo de Edulab"
              width="50"
              height="50"
              className="d-inline-block align-text-center"
            />
            Edulab SecundARIA
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
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Iniciar sesión
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/estudiantes">
                  Estudiantes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/quienes-somos">
                  Quiénes somos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contacto">
                  Contacto
                </Link>
              </li>
            </ul>
            <form className="d-flex ms-3" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar"
                aria-label="Buscar"
              />
              <button className="btn btn-outline-success" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </nav>

      <h1 className="page-title">Química General e Inorgánica</h1>
      <Link to="/" className="btn btn-outline-secondary return-button">
        Volver
      </Link>

      <p className="description">
        La Química General e Inorgánica es el estudio de las propiedades de la
        materia, estructura atómica y molecular, enlaces químicos y reacciones
        químicas.
      </p>

      <div className="card-container">
        <TopicCard
          title="Estructura Atómica"
          description="Explora los componentes básicos de la materia y cómo se organizan los átomos."
        />
        <TopicCard
          title="Enlace Químico"
          description="Conoce los diferentes tipos de enlaces y cómo se forman las moléculas."
        />
        <TopicCard
          title="Nomenclatura"
          description="Aprende el sistema de nombres utilizado para identificar compuestos químicos."
        />
        <TopicCard
          title="Configuración Electrónica"
          description="Descubre cómo se distribuyen los electrones en los átomos y cómo esto afecta sus propiedades."
        />
      </div>

      <main className="main-content">
        <AtomScene /> {/* Aquí va el modelo 3D del átomo */}
        <p className="atom-description">
          Representación gráfica de un átomo, destacando el núcleo y las órbitas
          de los electrones.
        </p>
      </main>
    </div>
  );
};

export default Quimica;
