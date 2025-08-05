import React from 'react'

//Estilos
import '../../../styles/components/seccionVisualizador/herramientas/herramientas.css'

//Iconos
import { FaInfo } from "react-icons/fa6";
import { TbRulerMeasure2 } from "react-icons/tb";

//Herramientas

export const Herramientas = ({ onAlternar, textoBoton }) => {
  return (
    <div className="menuHerramientas">
        <h2> <FaInfo/> </h2>
        <h2> <TbRulerMeasure2 /> </h2>
        <h2 onClick={onAlternar}> {textoBoton} </h2> {/* Alterna entre 2D y 3D */}
    </div>
  )
}
