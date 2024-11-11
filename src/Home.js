import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';


const navItems = [
    { to: "/", label: "Iniciar sesión" },
    { to: "/estudiantes", label: "Estudiantes" },
    { to: "/quienes-somos", label: "Quiénes somos" },
    { to: "/contacto", label: "Contacto" }
];

const subjects = [
    { to: "/MatematicasIntro", img: './Images/matematicas.png', title: "Matemáticas" },
    { to: "/fisica", img: './Images/física.png', title: "Física" },
    { to: "/QuimicaIntro", img: './Images/quimica.png', title: "Química" }
];

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">
                <img src={process.env.PUBLIC_URL + './Images/Logo.png'} className="card-img-top" alt="Logo" id="Logo" />
                EduLab SecundARIA
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    {navItems.map((item, index) => (
                        <li className="nav-item" key={index}>
                            <Link className="nav-link" to={item.to}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </nav>
);

const SubjectCard = ({ to, img, title }) => (
    <div className="col-md-4">
        <div className="card">
            <Link to={to}>
                <img src={process.env.PUBLIC_URL + img} className="card-img-top" alt={title} />
            </Link>
            <div className="card-body">
                <h5 className="card-title">Laboratorio para <strong>{title}</strong></h5>
            </div>
        </div>
    </div>
);

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="container text-center my-5">
                <h1 className="display-4">Laboratorio Virtual</h1>
                <p className="lead">Espacio educativo que integra Realidad Aumentada e Inteligencia Artificial para experiencias interactivas en Matemática, Física y Química.</p>
                <Link to="/aula" className='btn btn-dark btn-lg my-4'>Unirse al aula</Link>
                <div className="row">
                    {subjects.map((subject, index) => (
                        <SubjectCard key={index} {...subject} />
                    ))}
                </div>
            </div>
            <footer className="bg-light text-center py-3">
                <div className="container">
                    <p className="mb-0">Ayuda</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
