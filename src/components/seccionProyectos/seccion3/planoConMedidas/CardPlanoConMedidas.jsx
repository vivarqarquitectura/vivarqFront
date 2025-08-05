import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const CardPlanoConMedidas = ({imgPlanoConMedida, pcm1, pcm2, pcm3}) => {
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
        <div className='cpm_cardPlanoConMedidas' >
            <div className="cpm_img">
                <img src= {imgPlanoConMedida} alt="" />
            </div>
            <div className="cpm_txtYbtn">
                <h2>Planos con medidas</h2>
                <button className="btn-primary" onClick={abrirModal}>
                Ver más
                </button>
            </div>
            {/* Modal */}
            {ModalAbierto && (
            <div className="cpm_modal">
                <div className="cpm_contenidoModal">
                <button className="cpm_cerrarModal" onClick={cerrarModal}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
                <div className="cpm_imagenesEnModal1">
                    <div>
                    <h2>Planos con medidas</h2>
                    <p>Con tu descarga encontrarás disponible todos los palnos necesarios para realizar la construcción  de tu casa. Plantas, vistas, cortes, fachada y detalles técnicos sobre los cimientos.
                    Todo el material que necesitas para saber donde y como construir está incluido.</p>
                    </div>
                    <div className="cpm_imagenes1" >
                    <img src={pcm1} alt="Imagen 1" />
                    <img src={pcm2} alt="Imagen 2" />  
                    </div>
                </div>
                <div className="cpm_imagenesEnModal">
                    <img src={pcm3} alt="Imagen 2" />
                </div>
                </div>
            </div>
            )}
        </div>
    )
}

export default CardPlanoConMedidas;
