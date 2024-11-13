import React from "react";
import { Link } from "react-router-dom";
import Magnetismo from "../../Componentes/Magnetismo";
import Navbar from "../../Componentes/NavBar";
import Footer from "../../Componentes/Footer";
import '../../Estilos/Paginas.css';

const FisicaIntro = () => {
  return (
    <div style={{ width: "100%", margin: "0", padding: "0" }}>
      <Navbar />
      <section className="background-image" id="seccion-principal">
        <div className="row align-items-center" style={{ minHeight: "100vh" }}>
          <div className="col-md-6 col-12 text-center text-md-start">
            <div className="content-box">
              <h1 className="display-5 fw-bold text-dark">
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
          </div>

          <div className="col-md-6 col-12 d-flex justify-content-center mt-4 mt-md-0">
            <div className="expand" id="modelo3D">
              <Magnetismo />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FisicaIntro;

