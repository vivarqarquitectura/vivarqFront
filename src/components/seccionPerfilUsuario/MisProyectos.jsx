import React, { useEffect, useState } from 'react'
//components
import { TarjetaProyectoSeleccionado } from './TarjetaProyectoSeleccionado';

//Iconos en tarjetas
import { faBed, faFireBurner, faCouch  } from '@fortawesome/free-solid-svg-icons';

//Estilos
import '../../styles/components/seccionPerfilUsuario/misProyectos.css'


export const MisProyectos = () => {
    const [proyectoApi, setProyectoApi] = useState([]);

    const obtenerProyectos=async (e)=>{
        // Enviar la compra al servidor
        const response = await fetch(`${import.meta.env.VITE_URL_BACK}/misProyectos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            body: JSON.stringify({
                                "id_usuario":localStorage.getItem("id_usuario")
                                })        
        });
        // Verificar la respuesta del servidor
        const respuestaMisProyectos= await response.json();
    
        if (respuestaMisProyectos.length >= 1) {
            const proyectosDetallados = [];

            for (const proyecto of respuestaMisProyectos) {
            const respuestaProyecto = await fetch(`${import.meta.env.VITE_URL_BACK}/proyectos/${proyecto.id_proyecto}`);
            const [resProyecto] = await respuestaProyecto.json(); // suponiendo que la API devuelve un array
            proyectosDetallados.push(resProyecto);
            }

            setProyectoApi(proyectosDetallados);
         }
    }

        useEffect(() => {
        obtenerProyectos();
        }, [])
        

    return (
        <div className="misProyectos">
            <h2>Mis proyectos</h2>
            <div className="tarjetasDeMisProyectos">
                {
                    proyectoApi.map(proyecto => {
                        return (
                            <TarjetaProyectoSeleccionado
                                key={proyecto.id} // importante si estás dentro de un .map()
                                bgCasa={`${import.meta.env.VITE_URL_IMAGENES_VISTA_PREVIA}/${proyecto.img_proyecto}`}
                                titulo={proyecto.nombre}
                                iconos={[
                                    { icono: faBed, cantidad: proyecto.habitacion, destinos: 'habitacion' },
                                    { icono: faBed, cantidad: proyecto.habitacion, destinos: 'habitacion' },
                                    { icono: faFireBurner, cantidad: proyecto.cocina, destinos: 'Cocina' },
                                    { icono: faCouch, cantidad: proyecto.sala_estar, destinos: 'Estar' }
                                ]}
                                medidas={'5 x 6'}
                            />
                        );
                    })
                }
                
            </div>
        </div>
    )
}
