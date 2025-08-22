import React, { useContext } from 'react'

//Componentes
import Carrito from '../../components/seccionPagos/Carrito'
import NavBar from '../../components/seccion1/navBar/NavBar'
import PagoCarrito from '../../components/seccionPagos/PagoCarrito'
//estilos
import '../../styles/pages/Carrito/seccionDePagos.css'
import { CarritoContext } from '../../context/CarritoContext'


const SeccionCarrito = () => {
  const { CarritoEstado,eliminarDelCarrito } = useContext(CarritoContext);
  return (
    <div className='contenedorPagos'>
        <NavBar/>
      <div className='gridPagos' >
        <Carrito CarritoEstado={CarritoEstado} eliminarDelCarrito={eliminarDelCarrito} />
        <PagoCarrito/>
      </div>
    </div>
  )
}

export default SeccionCarrito