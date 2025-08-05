//nombre de como queres llamar al componente -- la ruta donde estan las pàginas
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// Importando páginas
import Principal from '../src/Pages/principal/Principal'
import Proyectos from '../src/Pages/proyectos/Proyectos'
import IniciarSesion from './Pages/login/iniciarSesion/IniciarSesion'
import Registrarse from './Pages/login/registrarse/Registrarse'
import Visualizador from './Pages/visualizador/Visualizador'
import PerfilDeUsuario from './Pages/perfilUsuario/PerfilDeUsuario'
import ProyectoGratis from './Pages/proyectos/ProyectoGratis'
import SeccionCarrito from './Pages/pagos/SeccionCarrito'
import Error404 from './Pages/error404/Error404'
import FormNuevoProyecto from './Pages/FormDeProyectos/FormNuevoProyecto'
import FormAgr_Imgs_proyecto from './Pages/FormDeProyectos/FormAgr_Imgs_proyecto'

//Importando herramienta ScrollTop
import ScrollToTop from "./components/herramientaScrollTop/ScrollToTop";

import { CarritoProvider } from './context/CarritoContext';

export default function Rutas() {
    return (
    <CarritoProvider>
        <BrowserRouter>
                <ScrollToTop/>
            <Routes>
                {/* <!--Ruta= lo que escribe en la URL / paginas > */}
                <Route path='/' element={<Principal/>} />
                <Route path='/FormNuevoProyecto' element={<FormNuevoProyecto/>} />
                <Route path='/FormAgregarImgsProyecto' element={<FormAgr_Imgs_proyecto/>} />
                <Route path='/proyecto/:id_proyecto' element={<Proyectos/>} />
                <Route path='/proyectoGratis' element={<ProyectoGratis/>} />
                <Route path='/iniciarSesion' element={<IniciarSesion/>} />
                <Route path='/registrarse' element={<Registrarse/>} />
                <Route path='/visualizador' element={<Visualizador/>} />
                <Route path='/perfilDeUsuario' element={<PerfilDeUsuario/>} />
                <Route path='/seccionCarrito' element={<SeccionCarrito/>} />
                <Route path='/error404' element={<Error404/>} />
                <Route path="*" element={<div>404</div> } />
            </Routes>

        </BrowserRouter>
    </CarritoProvider>
    )
}