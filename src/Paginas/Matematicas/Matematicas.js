import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Componentes/NavBar";
import Footer from "../../Componentes/Footer"; // Importa el componente Footer
import ZapparARSceneMath from "../../Componentes/ZapparARSceneMath";
import "../../Estilos/Paginas.css"; // Aquí agregarás los estilos responsive

const Matematicas = () => {
  return (
    <div className="matematicas-container">
      {/* Barra de navegación */}
      <Navbar />

      <header className="matematicas-header">
        <h1>Introducción a Matemáticas</h1>
{/* 
  <Link
    to="/MatematicasIntro"
    className="matematicas-btn btn btn-outline-secondary"
  >
    Atrás
  </Link>
*/}

      </header>

      <section className="matematicas-intro">
        <p>
          Las Matemáticas abarcan conceptos fundamentales como la estructura de
          las funciones, el análisis geométrico, los sistemas algebraicos y la
          teoría de números.
        </p>
      </section>

      <section className="matematicas-main">
        <ZapparARSceneMath />
        <p className="matematicas-description">
          Representación gráfica de una función matemática, mostrando sus curvas
          y características.
        </p>
      </section>

      <section className="matematicas-cards-container">
        <div className="matematicas-card">
          <h3>Estructura de Funciones</h3>
          <p>
            Explora cómo se construyen las funciones y cómo representan
            relaciones matemáticas.
          </p>
        </div>
        <div className="matematicas-card">
          <h3>Geometría</h3>
          <p>Estudia las formas, tamaños y propiedades del espacio.</p>
        </div>
        <div className="matematicas-card">
          <h3>Álgebra</h3>
          <p>
            Descubre cómo se usan las operaciones y estructuras algebraicas en
            problemas matemáticos.
          </p>
        </div>
        <div className="matematicas-card">
          <h3>Teoría de Números</h3>
          <p>
            Investiga las propiedades de los números y sus aplicaciones en
            diferentes contextos.
          </p>
        </div>
      </section>



      {/* Pie de Página Reutilizable */}
      <Footer />
    </div>
  );
};

export default Matematicas;
