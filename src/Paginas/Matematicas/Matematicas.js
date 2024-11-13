import React from "react";
import { Link } from "react-router-dom";
import Grafica from "../../Componentes/Grafica";
import Navbar from "../../Componentes/NavBar";
import Footer from "../../Componentes/Footer"; // Importa el componente Footer
import ZapparARScene from "../../Componentes/ZapparARScene";
import "../../Estilos/Paginas.css"; // Aquí agregarás los estilos responsive

const Matematicas = () => {
  return (
    <div className="matematicas-container container-fluid p-0">
      {/* Barra de navegación */}
      <Navbar />
      
      <header className="matematicas-header text-center py-5">
        <h1 className="display-4">Introducción a Matemáticas</h1>
        <Link to="/" className="matematicas-btn btn btn-outline-secondary mt-3">
          Volver
        </Link>
      </header>

      <section className="matematicas-intro text-center py-3">
        <p>
          Las Matemáticas abarcan conceptos fundamentales como la estructura de
          las funciones, el análisis geométrico, los sistemas algebraicos y la
          teoría de números.
        </p>
      </section>

      <section className="matematicas-main text-center py-4">
        <ZapparARScene />
        <p className="matematicas-description mt-3">
          Representación gráfica de una función matemática, mostrando sus curvas
          y características.
        </p>
      </section>

      <section className="matematicas-cards-container container py-4">
  <div className="row g-4">
    <div className="col-12 col-sm-6 col-md-3">
      <div className="matematicas-card card h-100">
        <div className="card-body">
          <h3 className="card-title">Estructura de Funciones</h3>
          <p className="card-text">
            Explora cómo se construyen las funciones y cómo representan relaciones matemáticas.
          </p>
        </div>
      </div>
    </div>
    <div className="col-12 col-sm-6 col-md-3">
      <div className="matematicas-card card h-100">
        <div className="card-body">
          <h3 className="card-title">Geometría</h3>
          <p className="card-text">Estudia las formas, tamaños y propiedades del espacio.</p>
        </div>
      </div>
    </div>
    <div className="col-12 col-sm-6 col-md-3">
      <div className="matematicas-card card h-100">
        <div className="card-body">
          <h3 className="card-title">Álgebra</h3>
          <p className="card-text">
            Descubre cómo se usan las operaciones y estructuras algebraicas en problemas matemáticos.
          </p>
        </div>
      </div>
    </div>
    <div className="col-12 col-sm-6 col-md-3">
      <div className="matematicas-card card h-100">
        <div className="card-body">
          <h3 className="card-title">Teoría de Números</h3>
          <p className="card-text">
            Investiga las propiedades de los números y sus aplicaciones en diferentes contextos.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


      

      
      {/* Pie de Página Reutilizable */}
      <Footer />
    </div>
  );
};

export default Matematicas;
