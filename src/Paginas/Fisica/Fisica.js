import React from "react";
import { Link } from "react-router-dom";
//import Magnetismo from "../../Componentes/Magnetismo";
import Navbar from "../../Componentes/NavBar";
import "../../Estilos/Paginas.css";
import Footer from "../../Componentes/Footer"; // Importa el componente Footer
import ZapparARScenePhysic from "../../Componentes/ZapparARScenePhysic";

const Fisicas = () => {
  return (
    <div className="matematicas-container">
      {/* Barra de navegación */}
      <Navbar />
      <header className="matematicas-header">
        <h1>Introducción a Fisica</h1>
        {/*<Link
          to="/FisicaIntro"
          className="matematicas-btn btn btn-outline-secondary"
        >
          Atrás
        </Link>*/}
      </header>
      <section className="matematicas-intro">
        <p>
          La Física estudia los principios fundamentales del universo, como la
          energía, el movimiento, la mecánica y las leyes que rigen los
          fenómenos naturales.
        </p>
      </section>
      <section className="matematicas-main">
        <ZapparARScenePhysic />
        <p className="matematicas-description">
          Representación gráfica de una función física, mostrando las curvas y
          los fenómenos asociados.
        </p>
      </section>
      <section className="matematicas-cards-container">
        <div className="matematicas-card">
          <h3>Mecánica</h3>
          <p>
            Explora las leyes del movimiento y las fuerzas que afectan a los
            cuerpos.
          </p>
        </div>
        <div className="matematicas-card">
          <h3>Termodinámica</h3>
          <p>
            Estudia la energía térmica, la temperatura y los principios de la
            transferencia de calor.
          </p>
        </div>
        <div className="matematicas-card">
          <h4>Electromagnetismo</h4>
          <p>
            Descubre cómo interactúan los campos eléctricos y magnéticos en
            diversos fenómenos.
          </p>
        </div>
        <div className="matematicas-card">
          <h3>Óptica</h3>
          <p>
            Investiga el comportamiento de la luz y sus propiedades en distintos
            medios.
          </p>
        </div>
      </section>

      {/* Pie de Página Reutilizable */}
      <Footer /> {/* Usa el componente Footer aquí */}
    </div>
  );
};

export default Fisicas;
