import React, { useState } from 'react';
import '../../../styles/components/imgPortada/imgPortada.css';

function ImgPortada({ img }) {
    const [loaded, setLoaded] = useState(false);

    const handleImageLoad = () => {
        setLoaded(true);
    };

    return (
        <div className="imgPortada">
            <img
                src={img} // Ruta de la imagen
                alt="Portada" // Descripción de la imagen
                className={`portada ${loaded ? 'loaded' : ''}`} // Agrega la clase 'loaded' al cargar
                onLoad={handleImageLoad} // Evento de carga
            />
        </div>
    );
}

export default ImgPortada;
