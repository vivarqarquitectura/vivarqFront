import React from 'react'
import { useNavigate } from "react-router-dom";
import { Tooltip } from 'react-tooltip';
//Estilos
import '../../../styles/components/navBar/btnCarrito.css'
//WSTILOS DE LA HERRAMIENTA TOOLTIP
import "react-tooltip/dist/react-tooltip.css";

//Iconos
import { AiOutlineShoppingCart } from "react-icons/ai";

const BtnCarrito = () => {
    const navigate = useNavigate();


return (
    <div className='btnCarrito' >
        <button title='Ver carrito' 
                onClick={() => navigate('/seccionCarrito')} 
                className='btnCarrito'
                data-tooltip-id='tooltip-carrito'
                data-tooltip-content="Ver mi carrito"
                data-tooltip-place="bottom"
                >
            <AiOutlineShoppingCart />
        </button>
        <Tooltip 
            id="tooltip-carrito" 
            place="bottom"
            effect="solid"
            offset={15}
            float={true}
            delayShow={300}
            style={{ fontSize: "12px", padding: "5px 10px", maxWidth: "120px" }}
        />
    </div>
)
}

export default BtnCarrito