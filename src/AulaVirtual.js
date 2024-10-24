import React from 'react';
import { Link } from 'react-router-dom';

const AulaVirtual = () => {
    return (
        <div>
            <h1>Esta es el aula virtual</h1>
            <button>
                <Link to="/">Volver</Link>
            </button>
        </div>
    );
};

export default AulaVirtual;
