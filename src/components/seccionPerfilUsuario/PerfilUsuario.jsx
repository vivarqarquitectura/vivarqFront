import React from 'react'
//Assets
import imgPerfilDeUsuario from '../../assets/imgTarjetas/casa3.png'
//Estilos
import '../../styles/components/seccionPerfilUsuario/PerfilUsuario.css'

export const PerfilUsuario = () => {
    return (
        <div className="tarjetaPerfilUsuario" >
            <div className="imagenUsuario">
                <img src={imgPerfilDeUsuario} alt="" />
            </div>
            <div className="herramientaUsuario">
                <h1>{localStorage.getItem('nombre')} {localStorage.getItem('apellido')}</h1>
                <ul>
                    <li> <a href="#">Herramienta 1</a> </li>
                    <li> <a href="#">Herramienta 2</a> </li>
                    <li> <a href="#">Herramienta 3</a> </li>
                </ul>
            </div>
            <div className="ctaUsuario">
                <button className="btn-inicio" >Editar perfil</button>
            </div>
        </div>
    )
}
