// En TarjetaProyecto.jsx
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const TarjetaProyectoSeleccionado = ({ bgCasa, titulo, iconos, medidas }) => {
    const navigate = useNavigate();
    console.log(bgCasa);
    console.log("hola");
    
    
    const handleRedirect = () => {
        navigate('/Proyecto', { 
            state: { 
                img: bgCasa,
                titulo: titulo,
                iconos: iconos,
                medidas: medidas || "N/A" 
            } 
        });
    };

    return (
        <div className="tp-tarjetaProyecto">
            <div className="tp-imgYtxt">
                <img src={bgCasa} alt="" />
                <h3> {titulo} </h3>
            </div>
            <div className="tp-iconos">
            {iconos.map((iconoObj, index) => (
                    <div key={index}>
                        <FontAwesomeIcon icon={iconoObj.icono} />
                        <span>{iconoObj.cantidad}</span>
                        
                    </div>
                ))}
            </div>
            <div className="tp-medidas">
                <h2> {medidas} </h2>
            </div>
            <div className="tp-btnVerProyecto">
                <button onClick={() => navigate("/visualizador")} >Visualizador</button>
                <button onClick={handleRedirect} >Descargar</button>
            </div>
        </div>
    );
};
