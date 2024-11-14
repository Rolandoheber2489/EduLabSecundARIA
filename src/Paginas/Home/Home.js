import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Componentes/NavBar";
import Footer from "../../Componentes/Footer";
import "../../Estilos/App.css";

const subjects = [
  {
    to: "/MatematicasIntro",
    img: "./Images/matematicaRA.jpg",
    title: "Matemáticas",
  },
  { to: "/FisicaIntro", img: "./Images/fisicaRA.jpg", title: "Física" },
  { to: "/QuimicaIntro", img: "./Images/quimicaRA.jpg", title: "Química" },
];

const SubjectCard = ({ to, img, title }) => (
  <div className="col-12 col-md-4 col-lg-3 mb-4">
    <div className="card h-100">
      <Link to={to}>
        <img
          src={process.env.PUBLIC_URL + img}
          className="card-img-top"
          alt={title}
        />
      </Link>
      <div className="card-body">
        <h5 className="laboratorio">
          Laboratorio <strong>{title}</strong>
        </h5>
      </div>
    </div>
  </div>
);

const Home = () => {
  return (
    <div className="container-home d-flex flex-column">
      <Navbar />
      <div className="container-fluid text-center my-auto">
        <h1 className="display-4">Laboratorio Virtual</h1>
        <p className="lead">
  Espacio educativo que integra <span className="bold-text"> Realidad Aumentada</span>  e <span className="bold-text">Inteligencia</span><br />
  <span className="bold-text">Artificial</span> para experiencias interactivas en Matemática, Física y Química.
</p>


        <Link to="/aula" className="btn btn-dark btn-lg my-4">
          Unirse al aula
        </Link>
        <div className="row justify-content-center">
          {subjects.map((subject, index) => (
            <SubjectCard key={index} {...subject} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
