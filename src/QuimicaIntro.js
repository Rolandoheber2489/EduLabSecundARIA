import React from 'react';
import { Link } from 'react-router-dom';
import AtomScene from './AtomScene';

const QuimicaIntro = () => {
    return (
        <div style={{ width: '100%', marginTop: '400px', textAlign: 'center', padding: '40px' }}>
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
                        <ul className="navbar-nav ms-auto">
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
                        <form className="d-flex ms-3" role="search">
                            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar" />
                            <button className="btn btn-outline-success" type="submit">Buscar</button>
                        </form>
                    </div>
                </div>
            </nav>

            <section className="background-image container my-5" id="seccion-principal">
                <div className="row align-items-center">
                    <div className="col-md-6 text-center text-md-start">
                        <h1 className="display-4 fw-bold text-dark">Bienvenido al laboratorio interactivo 3D de QUÍMICA</h1>
                        <p className="lead">Explorá y aprende QUÍMICA de manera educativa e inmersiva.</p>
                        <div className="d-flex justify-content-center justify-content-md-start">
                            <Link to="#" className="btn btn-outline-dark me-2">Ver más</Link>
                            <Link to="/quimica" className="btn btn-dark" id="iniciarBtn">Iniciar</Link> {/* Cambiado a Link */}
                        </div>
                    </div>

                    <div className="col-md-6 d-flex justify-content-center">
                        <div className="expand" id="modelo3D">
                            <AtomScene /> {/* Aquí insertas el modelo 3D con JavaScript (usando Three.js o similar) */}
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-dark text-center text-white py-3">
                <p>&copy; 2024 Equipo Edulab. Todos los derechos reservados.</p>
                <nav>
                    <Link to="/sobre-nosotros">Sobre Nosotros</Link> |
                    <Link to="/contacto">Contacto</Link> |
                    <Link to="/terminos">Términos de Servicio</Link> |
                    <Link to="/privacidad">Política de Privacidad</Link>
                </nav>
                <div className="my-2">
                    <a href="https://twitter.com/TuCuenta" target="_blank" rel="noopener noreferrer">Twitter</a> |
                    <a href="https://facebook.com/TuCuenta" target="_blank" rel="noopener noreferrer">Facebook</a> |
                    <a href="https://instagram.com/TuCuenta" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
                <div className="my-2">
                    <p>Contacto: contacto@gmail.com | +123 456 7890</p>
                </div>
                <div className="my-3">
                    <form action="/suscripcion" method="post">
                        <label htmlFor="email">Suscríbete a nuestro boletín:</label>
                        <input type="email" id="email" name="email" required />
                        <button type="submit">Suscribirse</button>
                    </form>
                </div>
            </footer>
        </div>
    );
};

export default QuimicaIntro;
