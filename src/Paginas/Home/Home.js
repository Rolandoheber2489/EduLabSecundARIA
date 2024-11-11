import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Componentes/NavBar";
import Footer from "../../Componentes/Footer"; // Importa el Footer
import "/Users/belen/Desktop/Rolando/seminario/EduLab-SecundARIA/edulab-secundaria/src/Estilos/App.css";

const subjects = [
  {
    to: "/MatematicasIntro",
    img: "./Images/matematicas.png",
    title: "Matemáticas",
  },
  { to: "/FisicaIntro", img: "./Images/física.png", title: "Física" },
  { to: "/QuimicaIntro", img: "./Images/quimica.png", title: "Química" },
];

const SubjectCard = ({ to, img, title }) => (
  <div className="col-md-4">
    <div className="card">
      <Link to={to}>
        <img
          src={process.env.PUBLIC_URL + img}
          className="card-img-top"
          alt={title}
        />
      </Link>
      <div className="card-body">
        <h5 className="card-title">
          Laboratorio <strong>{title}</strong>
        </h5>
      </div>
    </div>
  </div>
);

const Home = () => {
  return (
    <div className="container-home">
      <div className="container text-center my-5">
        <Navbar />
        <h1 className="display-4">Laboratorio Virtual</h1>
        <p className="lead">
          Espacio educativo que integra Realidad Aumentada e Inteligencia
          Artificial para experiencias interactivas en Matemática, Física y
          Química.
        </p>
        <Link to="/aula" className="btn btn-dark btn-lg my-4">
          Unirse al aula
        </Link>
        <div className="row">
          {subjects.map((subject, index) => (
            <SubjectCard key={index} {...subject} />
          ))}
        </div>
      </div>
      <Footer /> {/* Usa el componente Footer aquí */}
    </div>
  );
};

export default Home;
