import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const CardMateriales = ({mat1,
                        cantLadrillos, 
                        mat2, 
                        cantChapas, 
                        mat3, 
                        cantCemento, 
                        mat4, 
                        cantAislantes,
                        mat5, 
                        cantHormigon,
                        cm1, 
                        cm2, 
                        cm3}) => {

// Estado para controlar la vibilidad del modal
const [ModalAbierto, setModalAbierto] = useState(false);

// Función para abrir el modal
const abrirModal = () => setModalAbierto(true);

// Función para cerrar el modal
const cerrarModal = () => setModalAbierto(false);

// Desactivar scroll cuando el modal está abierto
useEffect(() => {
if (ModalAbierto) {
document.body.style.overflow = 'hidden'; // Desactiva el scroll
} else {
document.body.style.overflow = 'auto'; // Restaura el scroll
}

// Limpia el efecto al desmontar el componente
return () => {
document.body.style.overflow = 'auto';
};
}, [ModalAbierto]);


    return (
        <div>
            <div className="cm_cardMateriales">
                <div className="cm_materiales">
                    <div className="cm_tarjetaMaterial1" >
                        <img src={mat1}  alt="ladrillos" />
                        <p>Unidades de ladrillos</p>
                        <p>{cantLadrillos} </p>
                    </div>
                    
                    <div className="cm_tarjetaMaterial2" >
                        <img src={mat2}  alt="chapas" />
                        <p>Unidades de chapas</p>
                        <p>{cantChapas}</p>
                    </div>
                    <div className="cm_tarjetaMaterial3" >
                        <img src={mat3}  alt="cemento" />
                        <p>Bolsas de cemento</p>
                        <p>{cantCemento}</p>
                    </div>
                    <div className="cm_tarjetaMaterial4" >
                        <img src={mat4}  alt="aislantes" />
                        <p>Metros cuadrados de aislante</p>
                        <p>{cantAislantes}</p>
                    </div>
                    <div className="cm_tarjetaMaterial5" >
                        <img src={mat5}  alt="hormigón" />
                        <p>Metros cùbicos de hormigón</p>
                        <p>{cantHormigon}</p>
                    </div>
                </div>
                <div className="cm_txtYbtn">
                    <h2>Materiales necesarios</h2>
                    <button className="btn-primary" onClick={abrirModal} >
                        Ver mas
                    </button>
                </div>
            </div>
            {/* Modal */}
            {ModalAbierto && (
            <div className="cm_modal">
                <div className="cm_contenidoModal">
                <button className="cm_cerrarModal" onClick={cerrarModal}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
                <div className="cm_imagenesEnModal1">
                    <div>
                    <h2>Materiales necesarios para la obra</h2>
                    <p>Este contenido está preparado para que puedas visualizar las terminaciones y el equipamiento ideal desde una perspectiva más simple.
                    Desde el interior con su equipamiento, hasta el exterior con sus formas y acabados.</p>
                    </div>
                    <div className="cm_imagenes1" >
                    <img src={cm1} alt="Imagen 1" />
                    <img src={cm2} alt="Imagen 2" />  
                    </div>
                </div>
                <div className="cm_imagenesEnModal">
                    <img src={cm3} alt="Imagen 2" />
                </div>
                </div>
            </div>
            )}
        </div>
    )
}

export default CardMateriales;   