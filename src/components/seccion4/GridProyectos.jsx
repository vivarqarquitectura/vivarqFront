import React from 'react';
import '../../styles/components/seccion4/GridProyectos.css';

const GridProyectos = ({ images }) => {
    return (
        <div className="pinterest-grid">
            {images.map((img, index) => (
                <div key={index} className="grid-item">
                <img src={img.src} alt={img.alt || `Image ${index}`} />
                <p className="overlay-text">{img.caption || `Texto ${index + 1}`}</p>
                </div>
            ))}
        </div>
    );
};

export default GridProyectos;

