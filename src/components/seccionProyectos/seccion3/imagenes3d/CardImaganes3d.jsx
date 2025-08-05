import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons'; // Importa el ícono específico

const CardImaganes3d = ({ ci3d1, ci3d2, ci3d3, ci3d4 }) => {
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
    <div className="ci3d_cardImagenes3d">
      <div className="ci3d_img3d">
        <img className="ci3d_img3d1" src={ci3d1} alt="" />
        <img className="ci3d_img3d2" src={ci3d2} alt="" />
        <img className="ci3d_img3d3" src={ci3d3} alt="" />
        <img className="ci3d_img3d4" src={ci3d4} alt="" />
      </div>
      <div className="ci3d_txtYbtn">
        <h2>Imágenes interiores y exteriores</h2>
        <button className="btn-primary" onClick={abrirModal}>
          Ver más
        </button>
      </div>

      {/* Modal */}
      {ModalAbierto && (
        <div className="ci3d_modal">
          <div className="ci3d_contenidoModal">
            <button className="ci3d_cerrarModal" onClick={cerrarModal}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <div className="ci3d_imagenesEnModal1">
              <div>
                <h2>Imágenes interiores y exteriores</h2>
                <p>Este contenido está preparado para que puedas visualizar las terminaciones y el equipamiento ideal desde una perspectiva más simple.
                Desde el interior con su equipamiento, hasta el exterior con sus formas y acabados.</p>
              </div>
              <div className="ci3d_imagenes1" >
                <img src={ci3d1} alt="Imagen 1" />
                <img src={ci3d2} alt="Imagen 2" />  
              </div>
            </div>
            <div className="ci3d_imagenesEnModal">
                <img src={ci3d2} alt="Imagen 2" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardImaganes3d;