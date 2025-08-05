import React from 'react'

export const BtnLogin = () => {
    return (
        <>
            <a href={`${import.meta.env.VITE_URL_NAV}/iniciarSesion`} className="navbar-item hidden-lg">Iniciar Sesión</a>
            <a href={`${import.meta.env.VITE_URL_NAV}/registrarse`} className="navbar-item btn-primary">Registrarse</a>
        </>
    )
}

export default BtnLogin;