import React from "react";
import { Link } from "react-router-dom";
//import "/Users/belen/Desktop/Rolando/seminario/EduLab-SecundARIA/edulab-secundaria/src/Estilos/Paginas.css";
import Navbar from "../../Componentes/NavBar";
import "../../Estilos/Paginas.css";


const QuimicaVerMas = () => {
  const TopicCard = ({ title, description }) => {
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>;
  };

  return (
    <div>
      <Navbar />
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
      <Link
        to="/QuimicaIntro"
        className="btn btn-outline-secondary return-button"
      >
        Atrás
      </Link>
    </div>
  );
};

export default QuimicaVerMas;
