import React from "react";
import { Link } from "react-router-dom";
import Magnetismo from "../../Componentes/Magnetismo";
import Navbar from "../../Componentes/NavBar";
//import AtomScene from "../../Componentes/AtomScene";
//import "/Users/belen/Desktop/Rolando/seminario/EduLab-SecundARIA/edulab-secundaria/src/Estilos/Paginas.css";
import Footer from "../../Componentes/Footer"; // Importa el componente Footer

const Fisica = () => {
  return (
    <div
      style={{
        width: "100%",
        marginTop: "600px",
        textAlign: "center",
        padding: "40px",
      }}
    >
      {/* Barra de navegación */}
      <Navbar />
      <h1 style={{ marginBottom: "20px" }}>Introducción a la Física</h1>
      <Link to="/FisicaIntro" className="btn btn-outline-secondary mb-3">
        Volver
      </Link>
      <p style={{ margin: "20px", fontSize: "1.2em", color: "#555" }}>
        La Física estudia los principios fundamentales del universo, como la
        energía, el movimiento, la mecánica y las leyes que rigen los fenómenos
        naturales.
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
          <h3>Mecánica</h3>
          <p>
            Explora las leyes del movimiento y las fuerzas que afectan a los
            cuerpos.
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
          <h3>Termodinámica</h3>
          <p>
            Estudia la energía térmica, la temperatura y los principios de la
            transferencia de calor.
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
          <h3>Electromagnetismo</h3>
          <p>
            Descubre cómo interactúan los campos eléctricos y magnéticos en
            diversos fenómenos.
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
          <h3>Óptica</h3>
          <p>
            Investiga el comportamiento de la luz y sus propiedades en distintos
            medios.
          </p>
        </div>
      </div>
      <main
        style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
      >
        <Magnetismo /> {/* Aquí va el modelo 3D o gráfico de física */}
        <p
          style={{
            width: "30%",
            padding: "15px",
            borderRadius: "10px",
            color: "white",
          }}
        >
          Representación gráfica de una función física, mostrando las curvas y
          los fenómenos asociados.
        </p>
      </main>
      {/* Pie de Página Reutilizable */}
      <Footer /> {/* Usa el componente Footer aquí */}
    </div>
  );
};

export default Fisica;
