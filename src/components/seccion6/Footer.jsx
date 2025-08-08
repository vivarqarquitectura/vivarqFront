import logoPlax from '../../assets/logosPlax/logoPagina-blancoPLAX.png'

export const Footer = () => {
    return (
        <div className='f_footer'>
            <div className="f_logo vivarqMarca">
                {/* <img src={logoPlax} alt="Imagen portada" width={150} /> */}
                <p> VIVARQ </p>
            </div>
            <div className="f_contacto">
                <h3>Contactos</h3>
                <p>correo@correo.com</p>
                <p>correo@correo.com</p>
            </div>
            <div className="f_redes">
                <h3>Nuestras redes</h3>
                <p>Instagram</p>
                <p>Facebook</p>
                
            </div>
        </div>
    )
}
