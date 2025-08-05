import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faCheck, faDollarSign  } from '@fortawesome/free-solid-svg-icons';


const CardTarifas3 = ({opcion, precio}) => {
  const navigate = useNavigate();
  return (
    <div className="ct_cardTarifas4">
        <div className="ct_tituloYdesc">
          <h2> {opcion} </h2>
          <p>Manos a la obra:
            La solución completa con todos los detalles necesarios para ejecutar la obra.
          </p>
        </div>
        <div className="ct_precioGratis">
          <span className="ct_signoDolar">
            <FontAwesomeIcon icon={faDollarSign} style={{ color: '#3483fa63' }} />
            <span className='ct_valorGratuito' > {precio} </span>
          </span>
            <span className='ct_valor ' > Gratis </span>
        </div>
        <div className="ct_btnCompra">
          <button onClick={() => navigate("/perfilDeUsuario")} className="btn-comprar btn-comprarHover" >Adquirir</button>
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
            <p>Materiales necesarios</p>
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
        </div>
    </div>
  )
}

export default CardTarifas3;