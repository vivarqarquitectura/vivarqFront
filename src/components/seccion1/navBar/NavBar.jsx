import '../../../assets/logosPlax/PLAX ARQ.png';
import logoPlax from '../../../assets/logosPlax/PLAX ARQ.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import BtnUsuario from './BtnUsuario';
import BtnCarrito from './BtnCarrito';
import BtnLogin from './BtnLogin'
import { Link } from "react-router-dom";

//Img Avatar
import avatar from '../../../assets/avatar.png'

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            {/* Logo a la izquierda */}
            <div className="navbar-brand">
                <Link className='vivarqMarca' to={`${import.meta.env.VITE_URL_NAV}/`}>
                    {/* <img src={logoPlax} alt="Imagen portada" width={150} /> */}
                    <p >VIVARQ</p>
                </Link>
                
            </div>

            {/* Botón de hamburguesa (visible solo en móviles) */}
            <button className="navbar-toggle" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} />
            </button>

            {/* Contenido del Navbar */}
            <div className={`navbar-content ${isMenuOpen ? 'is-open' : ''}`}>
                <div className="navbar-center">
                    
                    {/* <Link to={`${import.meta.env.VITE_URL_NAV}/`} className="navbar-item active">Proyectos</Link>
                    <Link to={`${import.meta.env.VITE_URL_NAV}/`} className="navbar-item active">Nosotros</Link>
                    <Link to={`${import.meta.env.VITE_URL_NAV}/`} className="navbar-item active">Contacto</Link> */}
                </div>
                <div className="navbar-end">
                    <BtnCarrito/>
                </div>
                { localStorage.getItem("token") ?
                    <div className="navbar-end">
                        <BtnUsuario
                            imagenUrl={avatar}
                        />
                    </div>
                    : 
                    <div className="navbar-end">
                    <BtnLogin/>
                </div>
                    
                }
                
            </div>
        </nav>
    );
}

export default NavBar;
