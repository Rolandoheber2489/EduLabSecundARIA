import React from 'react';
import { Link } from 'react-router-dom';
import ZapparARScene from './Componentes/ZapparARScene';

const Fisica = () => {
    return (
        <div>
            <h1>Esta es la página de Física</h1>
            <button>
                <Link to="/">Volver</Link>
            </button>
            <ZapparARScene/>
        </div>
    );
};

export default Fisica;
