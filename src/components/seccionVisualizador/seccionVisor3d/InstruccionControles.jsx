import React, { useState, useEffect } from 'react';

//css
import '../../../styles/components/seccionVisualizador/seccionVisor3d/instruccionControles.css'

//imagenes
import flechas from '../../../assets/visor3d/controlesNavegacion/Arrows.png'
import wasd from '../../../assets/visor3d/controlesNavegacion/WASD.png'
import mouseR from '../../../assets/visor3d/controlesNavegacion/MouseR.png'
import mouseL from '../../../assets/visor3d/controlesNavegacion/MouseL.png'

function InstruccionControles() {
    const [mostrar, setMostrar] = useState(true);

    useEffect(() => {
        // Verifica si el usuario ya ha dado clic en "Entendido" en esta sesión
        const yaEntendido = sessionStorage.getItem('instruccionEntendido');
        if (yaEntendido) {
            setMostrar(false);
        }
    }, []);

    const handleEntendido = () => {
        // Oculta el componente y guarda el estado en sessionStorage
        setMostrar(false);
        sessionStorage.setItem('instruccionEntendido', 'true');
    };

    if (!mostrar) {
        return null; // No renderiza nada si el componente está oculto
    }

    return (
        <div className='instruccionControlesContenedor'>
            <div className="instruccionControles"> 
                <div className="teclado">
                    <div className="controlImagenes">
                        <img src={wasd} alt="" />
                        <img src={flechas} alt="" />
                    </div>
                    <p>Desplazate por el entorno con las teclas "W A S D" o las "Flechas"</p>
                </div>
                <div className="teclado">
                    <div className="controlImagenes">
                        <img src={mouseR} alt="" />
                        <img src={mouseL} alt="" />
                    </div>
                    <p>Utiliza los botones del mouse para interactuar</p>
                </div>
            </div>
            <button className='btn-entendido' onClick={handleEntendido}>Entendido</button>
        </div>
    );
}

export default InstruccionControles;