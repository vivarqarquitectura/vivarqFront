/* 
const CardInformacionProyecto = ({icono1, icono2, icono3, icono4}) => {
    return (
        <div className="cip_cardInformacionProyecto" >
            <div className="cip_icono1" >
                <span> {icono1} </span> 
                <p>1 Dormitorio</p> 
            </div>
            <div className="cip_icono2" >
                <span> {icono2} </span> 
                <p>1 baño</p> 
            </div>
            <div className="cip_icono3" >
                <span> {icono3} </span> 
                <p>1 vestidor</p> 
            </div>
            <div className="cip_icono4" >
                <span> {icono4} </span> 
                <p>25m2 cubiertos</p>  
            </div>
        </div>
    )
}

export default CardInformacionProyecto; */
/* 
const CardInformacionProyecto = ({ iconos }) => {
    return (
        <div className="cip_cardInformacionProyecto">
        {iconos.map((iconoObj, index) => (
            <div key={index} className={`cip_icono${index + 1}`}>
            <span>{iconoObj.icono}</span>
            <p>{iconoObj.texto}</p>
            </div>
        ))}
        </div>
    );
};

export default CardInformacionProyecto;

 */

// En CardInformacionProyecto.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardInformacionProyecto = ({ iconos }) => {
    return (
        <div className="cip_cardInformacionProyecto">
            {iconos.map((iconoObj, index) => (
                <div key={index} className={`cip_icono${index + 1}`}>
                    <FontAwesomeIcon icon={iconoObj.icono} />
                    <p className={`cip_cantidades${index + 1}`}>{iconoObj.cantidad}</p>
                    <p className={`cip_destinos${index + 1}`} >{iconoObj.destinos}</p>
                </div>
            ))}
        </div>
    );
};

export default CardInformacionProyecto;
