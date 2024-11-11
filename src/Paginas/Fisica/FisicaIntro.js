import React from "react";
import { Link } from "react-router-dom";
import Magnetismo from "../../Componentes/Magnetismo";
import "/Users/belen/Desktop/Rolando/seminario/EduLab-SecundARIA/edulab-secundaria/src/Estilos/Paginas.css";
import Navbar from "../../Componentes/NavBar";
import Footer from "../../Componentes/Footer"; // Importar el Footer

const FisicaIntro = () => {
  return (
    <div
      style={{
        width: "100%",
        marginTop: "400px",
        textAlign: "center",
        padding: "40px",
      }}
    >
      <Navbar />
      <section
        className="background-image container my-5"
        id="seccion-principal"
      >
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <h1 className="display-4 fw-bold text-dark">
              Bienvenido al laboratorio interactivo 3D de FÍSICA
            </h1>
            <p className="lead">
              Explorá y aprende FÍSICA de manera educativa e inmersiva.
            </p>
            <div className="d-flex justify-content-center justify-content-md-start">
              <Link to="#" className="btn btn-outline-dark me-2">
                Ver más
              </Link>
              <Link to="/Fisica" className="btn btn-dark" id="iniciarBtn">
                Iniciar
              </Link>
            </div>
          </div>

          <div className="col-md-6 d-flex justify-content-center">
            <div className="expand" id="modelo3D">
              <Magnetismo />
            </div>
          </div>
        </div>
      </section>
      <Footer /> {/* Agregar el componente Footer aquí */}
    </div>
  );
};

export default FisicaIntro;
