import React from 'react';
import './Nav.css';

export const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/index.html"><h1>VeterinariApp</h1></a>
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/index.html">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/paciente.html">Paciente</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/propietario.html">Propietario</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/profesional.html">Profesional</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-light" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}