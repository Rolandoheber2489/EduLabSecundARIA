import React from 'react';
import { Link } from 'react-router-dom';
import AtomScene from './AtomScene';


const Quimica = () => {
    return (
        <div>
            <h1>Esta es la página de Quimica</h1>
            <button>
                <Link to="/">Volver</Link>
            </button>
            <main>
                <AtomScene />  {/* Renderiza la escena 3D del átomo aquí */}
            </main>
        </div>
    );
};

export default Quimica;