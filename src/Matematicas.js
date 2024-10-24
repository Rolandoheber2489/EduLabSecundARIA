import React from 'react';
import { Link } from 'react-router-dom';
//import Graph3D from './Graph3d';
import ZapparARScene from './Componentes/ZapparARScene';

const Matematicas = () => {
    return (
        <div>
            <h1>Esta es la página de Matemáticas</h1>
            <button>
                <Link to="/">Volver</Link>
            </button>
            {/*<Graph3D />*/}
            <ZapparARScene/>
        </div>
    );
};

export default Matematicas;
