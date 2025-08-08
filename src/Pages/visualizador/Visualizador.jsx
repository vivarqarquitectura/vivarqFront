import React, { useState } from "react";
//Componentes
import { SidebarVisualizador } from "../../components/seccionVisualizador/nav/SidebarVisualizador";
//Estilos
import '../../styles/pages/visualizador/visualizador.css'
import { Herramientas } from "../../components/seccionVisualizador/herramientas/Herramientas";


//Import de planos
import plantaReplanteo from '../../assets/imgProyectos/imgProyecto1/planos/planosGenerales/planoDeReplanteo.png'
import plantaCimientos from '../../assets/imgProyectos/imgProyecto1/planos/planosGenerales/planoDeCimientos.jpg'
import plantaBaja from '../../assets/imgProyectos/imgProyecto1/planos/planosGenerales/planoPlantaBaja.jpg'
import plantaTecho from '../../assets/imgProyectos/imgProyecto1/planos/planosGenerales/planoPlantaDeTechos.jpg'
import plantaAmoblada from '../../assets/imgProyectos/imgProyecto1/planos/planosGenerales/planoPlantaAmoblada.jpg'


//Import del visor 3D
import Visor3d from "../../components/seccionVisualizador/seccionVisor3d/Visor3d";
import InstruccionControles from "../../components/seccionVisualizador/seccionVisor3d/InstruccionControles";

export default function Visualizador () {
    // Estado para manejar la visibilidad del nav 
    const [sidebarVisible, setSidebarVisible] = useState(true);
    // Estado para manejar la imagen seleccionada
    const [imagenActual, setImagenActual] = useState(plantaReplanteo);
    
    // Estado para alternar entre 2D y 3D
    const [mostrar2D, setMostrar2D] = useState(true);

    // Función para cambiar la imagen
    const cambiarImagen = (nombreImagen) => {
        const imagenes = {
            "Planta de replanteo": plantaReplanteo,
            "Planta cimientos": plantaCimientos,
            "Planta baja": plantaBaja,
            "Planta de techos": plantaTecho,
            "Planta amoblada": plantaAmoblada
        };

        setImagenActual(imagenes[nombreImagen] || plantaReplanteo);
    }

    return (
        <>
            {!mostrar2D && <InstruccionControles />}
            <div className="visualizador">
                {sidebarVisible && (
                    <div className="sidebar">
                        <SidebarVisualizador onSeleccionar={cambiarImagen} />
                    </div>
                )}
                <div className="vistaDePlanos">
                    {/* Alterna entre la imagen 2D y el visor 3D */}
                    {mostrar2D ? (
                        <img src={imagenActual} alt="Plano 2D" />
                    ) : (
                        <div style={{ height: '100dvh', width: '100vw' }}>
                            <Visor3d/>
                        </div>
                    )}
                </div>
                <div className="herramientas" >
                    {/* Pasamos la función para alternar entre 2D y 3D */}
                    <Herramientas
                        onAlternar={() => {
                            setMostrar2D((prev) => {
                            const nuevoValor = !prev;
                            setSidebarVisible(nuevoValor);
                            return nuevoValor;
                            });
                        }}
                        textoBoton={mostrar2D ? "3D" : "2D"}
                    />
                </div>
            </div>
        </>
    )
}