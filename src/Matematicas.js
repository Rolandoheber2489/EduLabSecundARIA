import React from "react";
import { Link } from "react-router-dom";
import Grafica from "./Grafica";

const Matematicas = () => {
  return (
    <div
      style={{
        width: "100%",
        marginTop: "600px",
        textAlign: "center",
        padding: "40px",
      }}
    >
      {/* Barra de navegación */}
      <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src={process.env.PUBLIC_URL + "/imagenes/Logo.png"}
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
            {/* Formulario de búsqueda */}
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

      <h1 style={{ marginBottom: "20px" }}>Introducción a Matemáticas</h1>
      <Link to="/" className="btn btn-outline-secondary mb-3">
        Volver
      </Link>

      <p style={{ margin: "20px", fontSize: "1.2em", color: "#555" }}>
        Las Matemáticas abarcan conceptos fundamentales como la estructura de
        las funciones, el análisis geométrico, los sistemas algebraicos y la
        teoría de números.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            width: "250px",
            padding: "15px",
            border: "1px solid #ddd",
            borderRadius: "10px",
          }}
        >
          <h3>Estructura de Funciones</h3>
          <p>
            Explora cómo se construyen las funciones y cómo representan
            relaciones matemáticas.
          </p>
        </div>
        <div
          style={{
            width: "250px",
            padding: "15px",
            border: "1px solid #ddd",
            borderRadius: "10px",
          }}
        >
          <h3>Geometría</h3>
          <p>Estudia las formas, tamaños y propiedades del espacio.</p>
        </div>
        <div
          style={{
            width: "250px",
            padding: "15px",
            border: "1px solid #ddd",
            borderRadius: "10px",
          }}
        >
          <h3>Álgebra</h3>
          <p>
            Descubre cómo se usan las operaciones y estructuras algebraicas en
            problemas matemáticos.
          </p>
        </div>
        <div
          style={{
            width: "250px",
            padding: "15px",
            border: "1px solid #ddd",
            borderRadius: "10px",
          }}
        >
          <h3>Teoría de Números</h3>
          <p>
            Investiga las propiedades de los números y sus aplicaciones en
            diferentes contextos.
          </p>
        </div>
      </div>

      <main
        style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
      >
        <Grafica /> {/* Aquí va el modelo 3D o gráfico matemático */}
        <p
          style={{
            width: "30%",
            padding: "15px",
            borderRadius: "10px",
            color: "white",
          }}
        >
          Representación gráfica de una función matemática, mostrando sus curvas
          y características.
        </p>
      </main>
    </div>
  );
};

export default Matematicas;

// import React from 'react';
// import { Link } from 'react-router-dom';
// //import Graph3D from './Graph3d';
// import ZapparARScene from './Componentes/ZapparARScene';

// const Matematicas = () => {
//     return (
//         <div>
//             <h1>Esta es la página de Matemáticas</h1>
//             <button>
//                 <Link to="/">Volver</Link>
//             </button>
//             {/*<Graph3D />*/}
//             <ZapparARScene/>
//         </div>
//     );
// };

// export default Matematicas;
