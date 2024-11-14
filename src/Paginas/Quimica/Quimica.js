import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Componentes/NavBar";
import Footer from "../../Componentes/Footer"; // Importa el componente Footer
import ZapparARSceneChemical from "../../Componentes/ZapparARSceneChemical";
//import "bootstrap/dist/css/bootstrap.min.css"; // Asegúrate de importar Bootstrap

const Quimica = () => {
  return (
    <div className="matematicas-container">
      {/* Barra de navegación */}
      <Navbar />

      <header className="matematicas-header">
        <h1>Quimica General e Inorgánica</h1>
        {/*<Link
          to="/QuimicaIntro"
          className="matematicas-btn btn btn-outline-secondary"
        >
          Atrás
        </Link>*/}
      </header>

      <section className="matematicas-intro">
        <p>
          La Química General e Inorgánica es el estudio de las propiedades de la
          materia, estructura atómica y molecular, enlaces químicos y reacciones
          químicas.
        </p>
      </section>

      <section className="matematicas-main">
        <ZapparARSceneChemical />
        <p className="matematicas-description">
          Representación gráfica de un átomo, destacando el núcleo y las órbitas
          de los electrones.
        </p>
      </section>

      <section className="matematicas-cards-container">
        <div className="matematicas-card">
          <h3>Estructura Atómica</h3>
          <p>
            Explora los componentes básicos de la materia y cómo se organizan
            los átomos.
          </p>
        </div>
        <div className="matematicas-card">
          <h3>Enlace Químico</h3>
          <p>
            Conoce los diferentes tipos de enlaces y cómo se forman las
            moléculas.
          </p>
        </div>
        <div className="matematicas-card">
          <h3>Nomenclatura</h3>
          <p>
            Aprende el sistema de nombres utilizado para identificar compuestos
            químicos.
          </p>
        </div>
        <div className="matematicas-card">
          <h3>Configuración Electrónica</h3>
          <p>
            Descubre cómo se distribuyen los electrones en los átomos y cómo
            esto afecta sus propiedades.
          </p>
        </div>
      </section>



      {/* Pie de Página Reutilizable */}
      <Footer />
    </div>
  );
};

export default Quimica;
