import React from 'react';
import '../../styles/pages/error404/error404.css';

const Error404 = () => {
  return (
    <div className="error-container">
      <div className="warning-tape"> ¡Ups...! </div>
      <div className="error-content">
        <h1 className="error-title">404</h1>
        <h2 className="error-subtitle">Plano no encontrado</h2>
        <p className="error-message">
            Lo sentimos, no pudimos encontrar la información que buscabas.
        </p>
        <a href="/" className="error-button">Volver al inicio</a>
      </div>
    </div>
  );
};

export default Error404;
