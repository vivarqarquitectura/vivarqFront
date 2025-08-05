// En TarjetaProyecto.jsx
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const TarjetaProyecto = ({ bgCasa, titulo, iconos,frente,fondo,id_proyecto }) => {
    const navigate = useNavigate();
    const handleRedirect = () => {
        navigate(`/proyecto/${id_proyecto}`, { 
            state: {
                iconos: iconos,
            } 
        });
    };
    return (
        <div className="tp-tarjetaProyecto">
            <div className="tp-imgYtxt">
                <img src={`${import.meta.env.VITE_URL_IMAGENES_VISTA_PREVIA}/${bgCasa}`} alt="" />
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
                <h2> {frente} X {fondo} </h2>
            </div>
            <div className="tp-btnVerProyecto">
                <button onClick={handleRedirect} >Ver proyecto</button>
            </div>
        </div>
    );
};
