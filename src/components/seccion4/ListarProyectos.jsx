import React, { Fragment, useEffect, useState } from 'react'
import { TarjetaProyecto } from "../../components/seccion4/TarjetaProyecto";
//Iconos en tarjetas
import { faToilet, faBed, faFireBurner, faCouch  } from '@fortawesome/free-solid-svg-icons';

  export default function ListarProyectos({ innerRef }) {

    const [proyectos, setProyectos] = useState([]);

    const traerProyectos = async () => {
        const respuesta=await fetch(`${import.meta.env.VITE_URL_BACK}/proyectos`);
        const res=await respuesta.json();
        setProyectos(...proyectos,res);
        
    };
    
    useEffect(() => {
      traerProyectos();
    }, [])
    

    return (
      <section className="seccionScroll" ref={innerRef}>
        {
            proyectos.map((proyecto) => (
                <TarjetaProyecto
                    key={proyecto.id_proyecto}
                    bgCasa={proyecto.img_proyecto}
                    titulo={proyecto.nombre}
                    iconos={[
                        { icono: faBed, cantidad: proyecto.baño, destinos: 'Baños' },
                        { icono: faBed, cantidad: proyecto.habitacion, destinos: 'Dormitorios' },
                        { icono: faFireBurner, cantidad: proyecto.cocina, destinos: 'Cocina' },
                        { icono: faCouch, cantidad: proyecto.sala_estar, destinos: 'Estar' }
                    ]}
                    frente={proyecto.frente}
                    fondo={proyecto.fondo}
                    id_proyecto={proyecto.id_proyecto}
                />
            ))
        }
      </section>  
    )
  }
