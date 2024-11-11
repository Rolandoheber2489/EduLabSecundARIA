import React from "react";
import { Link } from "react-router-dom";
import Grafica from "../../Componentes/Grafica";
import Navbar from "../../Componentes/NavBar";
import "/Users/belen/Desktop/Rolando/seminario/EduLab-SecundARIA/edulab-secundaria/src/Estilos/Paginas.css";
import Footer from "../../Componentes/Footer"; // Importa el componente Footer
import ZapparARScene from "../../Componentes/ZapparARScene";

const Matematicas = () => {
  return (
    <div
      style={{
        width: "100%",
        marginTop: "400px",
        textAlign: "center",
        padding: "40px",
      }}
    >
      {/* Barra de navegación */}
      <Navbar />
      <h1>Introducción a Matemáticas</h1>
      <Link to="/" className="btn btn-outline-secondary mb-3">
        Volver
      </Link>
      <p>
        Las Matemáticas abarcan conceptos fundamentales como la estructura de
        las funciones, el análisis geométrico, los sistemas algebraicos y la
        teoría de números.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            width: "250px",
            padding: "15px",
            border: "1px solid #ddd",
            borderRadius: "10px",
          }}
        >
          <h3>Estructura de Funciones</h3>
          <p>
            Explora cómo se construyen las funciones y cómo representan
            relaciones matemáticas.
          </p>
        </div>
        <div
          style={{
            width: "250px",
            padding: "15px",
            border: "1px solid #ddd",
            borderRadius: "10px",
          }}
        >
          <h3>Geometría</h3>
          <p>Estudia las formas, tamaños y propiedades del espacio.</p>
        </div>
        <div
          style={{
            width: "250px",
            padding: "15px",
            border: "1px solid #ddd",
            borderRadius: "10px",
          }}
        >
          <h3>Álgebra</h3>
          <p>
            Descubre cómo se usan las operaciones y estructuras algebraicas en
            problemas matemáticos.
          </p>
        </div>
        <div
          style={{
            width: "250px",
            padding: "15px",
            border: "1px solid #ddd",
            borderRadius: "10px",
          }}
        >
          <h3>Teoría de Números</h3>
          <p>
            Investiga las propiedades de los números y sus aplicaciones en
            diferentes contextos.
          </p>
        </div>
      </div>
      <main
        style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
      >
        {/*<Grafica />  Aquí va el modelo 3D o gráfico matemático */}
        <ZapparARScene />
        <p
          style={{
            width: "30%",
            padding: "15px",
            borderRadius: "10px",
            color: "white",
          }}
        >
          Representación gráfica de una función matemática, mostrando sus curvas
          y características.
        </p>
      </main>
      {/* Pie de Página Reutilizable */}
      <Footer /> {/* Usa el componente Footer aquí */}
    </div>
  );
};

export default Matematicas;

// import React from 'react';
// import { Link } from 'react-router-dom';
// //import Graph3D from './Graph3d';
// import ZapparARScene from './Componentes/ZapparARScene';

// const Matematicas = () => {
//     return (
//         <div>
//             <h1>Esta es la página de Matemáticas</h1>
//             <button>
//                 <Link to="/">Volver</Link>
//             </button>
//             {/*<Graph3D />*/}
//             <ZapparARScene/>
//         </div>
//     );
// };

// export default Matematicas;
