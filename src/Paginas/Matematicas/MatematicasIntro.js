import React from "react";
import { Link } from "react-router-dom";
import AtomScene from "../../Componentes/Grafica";
import Navbar from "../../Componentes/NavBar";
import Footer from "../../Componentes/Footer";
import "../../Estilos/Paginas.css";

const MatematicaIntro = () => {
  return (
    <div style={{ width: "100%", marginTop: "0px", padding: "0", height: "100vh" }}>
      <Navbar />
      <section className="background-image" id="seccion-principal">
        <div className="row align-items-center" style={{ height: "100%" }}>
          <div className="col-md-6 col-12 text-center text-md-start">
            <div className="content-box">
              <h1 className="display-4 fw-bold text-dark">
                Bienvenido al laboratorio interactivo 3D de MATEMÁTICAS
              </h1>
              <p className="lead">
                Explorá y aprende MATEMÁTICAS de manera educativa e inmersiva.
              </p>
              <div className="d-flex justify-content-center justify-content-md-start">
                <Link to="#" className="btn btn-outline-dark me-2">
                  Ver más
                </Link>
                <Link to="/matematicas" className="btn btn-dark" id="iniciarBtn">
                  Iniciar
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-12 d-flex justify-content-center mt-4 mt-md-0">
            <div className="expand" id="modelo3D">
              <AtomScene />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MatematicaIntro;
