import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css';
import { logo } from '../../assets/images';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className='navbar_container'>
                <div>
                    <div className='navbar_sections'>
                        <i className="fa-solid fa-bars navbar_icon"></i>
                        <span className='navbar_text'>SECCIONES</span>
                    </div>
                </div>
                <div>
                    <img src={logo} alt="imagen" />
                </div>
                <div>
                    <div className='navbar_redes'>
                        <i className="fa-brands fa-facebook navbar_icon navbar_icon--space"></i>
                        <i className="fa-brands fa-twitter navbar_icon navbar_icon--space"></i>
                        <i className="fa-brands fa-instagram navbar_icon navbar_icon--space"></i>
                        <i className="fa-brands fa-google navbar_icon navbar_icon--space"></i>
                        <span style={{ color: 'white' }}>News</span>
                    </div>
                </div>
            </div>
            <div className='navbar_links'>
                <ul className='navbar_list' >
                    <li>
                        <NavLink
                            className={({ isActive }) => (isActive ? 'navbar_item navbar_item--active' : 'navbar_item')}
                            to="/"
                        >
                            INICIO
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? 'navbar_item navbar_item--active' : 'navbar_item')} to="/detail">LANZAMIENTOS</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? 'navbar_item navbar_item--active' : 'navbar_item')} to="/contacto">CONTACTO</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? 'navbar_item navbar_item--active' : 'navbar_item')} to="/columna-del-director">COLUMNA DEL DIRECTOR</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? 'navbar_item navbar_item--active' : 'navbar_item')} to="/revista-motor">REVISTA MOTOR</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;