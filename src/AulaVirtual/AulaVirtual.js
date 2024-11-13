import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Componentes/NavBar";
//import "/Users/belen/Desktop/Rolando/seminario/EduLab-SecundARIA/edulab-secundaria/src/Estilos/App.css";
import '../Estilos/App.css';


const AulaVirtual = () => {
  return (
    <div>
      <Navbar />
      <h1>Esta es el aula virtual</h1>
      <button>
        <Link to="/">Volver</Link>
      </button>
    </div>
  );
};

export default AulaVirtual;
