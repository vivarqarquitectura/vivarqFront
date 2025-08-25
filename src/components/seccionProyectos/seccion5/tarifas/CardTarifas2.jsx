
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faCheck, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { MdStars } from "react-icons/md";
const CardTarifas2 = ({opcion, precio,agregarCarrito}) => {
  return (
    <div className="ct_cardTarifas2">
        <div className="ct_cardTarifas2_div1">
            <p>Más popular </p> <MdStars />
        </div>

        <div className="ct_cardTarifas2_div2">
          <div className="ct_tituloYdesc">
            <h2> {opcion} </h2>
            <p>Viendo con detalle:
              Incluye lo básico más una visualización realista del proyecto.
            </p>
          </div>
          <div className="ct_precio">
            <span className="ct_signoDolar">
              <FontAwesomeIcon icon={faDollarSign} style={{ color: 'var(--colorCheck)' }} />
              <span className='ct_valor' > {precio} </span>
            </span>
          </div>
          <div className="ct_btnCompra">
            <button className="btn-comprar btn-comprarHover"onClick={()=>{agregarCarrito(precio,opcion)}} >Agregar Carrito</button>
          </div>
          <div className="ct_detalle">
            <div className="ct_tituloEinfo">
              <p>Planos con medidas</p>
                <button>
                  <FontAwesomeIcon icon={faCircleInfo} style={{color: "var(--colorInfo)", fontSize: '18px'}} />
                </button>
          </div>
              
          <ul>
            <li>
              <span className="icon-texto">
                <FontAwesomeIcon icon={faCheck} style={{ color: 'var(--colorCheck)' }} />
                <span>Planta general</span>
              </span>
            </li>
            <li>
              <span className="icon-texto">
                <FontAwesomeIcon icon={faCheck} style={{ color: 'var(--colorCheck)' }} />
                <span>Planta de techos</span>
              </span>
            </li>
            <li>
              <span className="icon-texto">
                <FontAwesomeIcon icon={faCheck} style={{ color: 'var(--colorCheck)' }} />
                <span>Planta general con una descripción larga que salta a la siguiente línea para ver la alineación correcta.</span>
              </span>
            </li>
            <li>
              <span className="icon-texto">
                <FontAwesomeIcon icon={faCheck} style={{ color: 'var(--colorCheck)' }} />
                <span>Cortes: Longitudinal y transversal</span>
              </span>
            </li>
            <li>
              <span className="icon-texto">
                <FontAwesomeIcon icon={faCheck} style={{ color: 'var(--colorCheck)' }} />
                <span>Planta: Estructura de cimientos</span>
              </span>
            </li>
          </ul>
          <div className="ct_tituloEinfo">
            <p>Imágenes interiores y exteriores</p>
              <button>
                <FontAwesomeIcon icon={faCircleInfo} style={{color: "var(--colorInfo)", fontSize: '18px'}} />
              </button>
          </div>
              
          <ul>
            <li>
              <span className="icon-texto">
                <FontAwesomeIcon icon={faCheck} style={{ color: 'var(--colorCheck)' }} />
                <span>Cantidad de materiales</span>
              </span>
            </li>
            <li>
              <span className="icon-texto">
                <FontAwesomeIcon icon={faCheck} style={{ color: 'var(--colorCheck)' }} />
                <span>Planta de techos</span>
              </span>
            </li>
            <li>
              <span className="icon-texto">
                <FontAwesomeIcon icon={faCheck} style={{ color: 'var(--colorCheck)' }} />
                <span>Planta general con una descripción larga que salta a la siguiente línea para ver la alineación correcta.</span>
              </span>
            </li>
            <li>
              <span className="icon-texto">
                <FontAwesomeIcon icon={faCheck} style={{ color: 'var(--colorCheck)' }} />
                <span>Cortes: Longitudinal y transversal</span>
              </span>
            </li>
            <li>
              <span className="icon-texto">
                <FontAwesomeIcon icon={faCheck} style={{ color: 'var(--colorCheck)' }} />
                <span>Planta: Estructura de cimientos</span>
              </span>
            </li>
          </ul>
          </div>
        </div>
    </div>
  )
}

export default CardTarifas2;