import React from 'react'
import { Link } from "react-router-dom";
export const BtnLogin = () => {
    return (
        <>
        <Link to={`${import.meta.env.VITE_URL_NAV}/iniciarSesion`} className="navbar-item hidden-lg">
            Iniciar Sesión
        </Link>
        <Link to={`${import.meta.env.VITE_URL_NAV}/registrarse`} className="navbar-item btn-primary">
            Registrarse
        </Link>
        </>
    )
}

export default BtnLogin;