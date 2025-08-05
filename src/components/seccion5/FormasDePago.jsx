//Iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faDownload, faHeadset  } from '@fortawesome/free-solid-svg-icons';


export const FormasDePago = () => {
    return (
        <div className="fp_formasDePago">
            <div className="comoPagar">
                <FontAwesomeIcon  className='fp_faCreditCard' icon={ faCreditCard } size='3x' />
                <h3>Elegí como pagar</h3>
                <p>Podes pagar con tarjeta, débito, credito, en cuotas, simple y fácil</p>
            </div>
            <div className="comoDescargar">
                <FontAwesomeIcon  className='fp_faDownload' icon={faDownload} size='3x' />
                
                <h3>Descarga simple</h3>
                <p>Descarga tus proyectos de forma segura y simple, sin intermediarios y al instante</p>
            </div>
            <div className="soporte">
                <FontAwesomeIcon  className='fp_faHeadset' icon={ faHeadset } size='3x' />
                <h3>Soporte disponible</h3>
                <p>Cualquier duda que tengas, podes consultar con nuestros profesionales disponibles</p>
            </div>
        </div>
    )
}
