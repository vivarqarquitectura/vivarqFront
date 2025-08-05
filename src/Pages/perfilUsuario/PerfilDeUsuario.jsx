import React from 'react'
//Componentes
import { PerfilUsuario } from '../../components/seccionPerfilUsuario/PerfilUsuario'
import { MisProyectos } from '../../components/seccionPerfilUsuario/MisProyectos'
import NavBar from '../../components/seccion1/navBar/NavBar'


//Estilos
import '../../styles/pages/perfilUsuario/perfilUsuario.css'
export default function PerfilDeUsuario () {
    return (
    
        <div className="perfilDeUsuario" >
            <div className="navMenu">
                <NavBar/>
            </div>
            <div className="contenedorTarjetaPerfilUsuario">
                <PerfilUsuario/>
                <MisProyectos />
            </div>
        </div>
        
    )
}