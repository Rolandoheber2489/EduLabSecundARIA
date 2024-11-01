import React from 'react';
import { Link } from 'react-router-dom';
import AtomScene from './AtomScene';


const Quimica = () => {
  return (
    <div style={{ width: '100%', marginTop: '600px', textAlign: 'center', padding: '40px' }}>
      {/* Barra de navegación */}
      <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={process.env.PUBLIC_URL + '/imagenes/Logo.png'} id="Logo" alt="Logo de Edulab" width="50" height="50" className="d-inline-block align-text-center" />
            Edulab SecundARIA
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto"> {/* Alínea a la derecha con ms-auto */}
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Iniciar sesión</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/estudiantes">Estudiantes</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/quienes-somos">Quiénes somos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contacto">Contacto</Link>
              </li>
            </ul>
            {/* Formulario de búsqueda */}
            <form className="d-flex ms-3" role="search">
              <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar" />
              <button className="btn btn-outline-success" type="submit">Buscar</button>
            </form>
          </div>
        </div>
      </nav>

      <h1 style={{ marginBottom: '20px' }}>Química General e Inorgánica</h1>
      <Link to="/" className="btn btn-outline-secondary mb-3">Volver</Link>

      <p style={{ margin: '20px', fontSize: '1.2em', color: '#555' }}>
        La Química General e Inorgánica es el estudio de las propiedades de la materia, estructura atómica y molecular, enlaces químicos y reacciones químicas.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginTop: '20px' }}>
        <div style={{ width: '250px', padding: '15px', border: '1px solid #ddd', borderRadius: '10px' }}>
          <h3>Estructura Atómica</h3>
          <p>Explora los componentes básicos de la materia y cómo se organizan los átomos.</p>
        </div>
        <div style={{ width: '250px', padding: '15px', border: '1px solid #ddd', borderRadius: '10px' }}>
          <h3>Enlace Químico</h3>
          <p>Conoce los diferentes tipos de enlaces y cómo se forman las moléculas.</p>
        </div>
        <div style={{ width: '250px', padding: '15px', border: '1px solid #ddd', borderRadius: '10px' }}>
          <h3>Nomenclatura</h3>
          <p>Aprende el sistema de nombres utilizado para identificar compuestos químicos.</p>
        </div>
        <div style={{ width: '250px', padding: '15px', border: '1px solid #ddd', borderRadius: '10px' }}>
          <h3>Configuración Electrónica</h3>
          <p>Descubre cómo se distribuyen los electrones en los átomos y cómo esto afecta sus propiedades.</p>
        </div>
      </div>

      <main style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
        <AtomScene />  {/* Aquí va el modelo 3D del átomo */}
        <p style={{ width: '30%', padding: '15px', borderRadius: '10px' }}>
          Representación gráfica de un átomo, destacando el núcleo y las órbitas de los electrones.
        </p>
      </main>
    </div>
  );
};

export default Quimica;
