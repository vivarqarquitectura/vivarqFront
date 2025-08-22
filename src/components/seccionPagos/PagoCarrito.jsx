
//Estilos
import '../../styles/components/seccionCarrito/carrito.css';

import { useContext, useEffect, useState } from 'react'; 
import {CarritoContext} from '../../context/CarritoContext';
import {useNavigate} from 'react-router-dom'

const PagoCarrito = () => {
    const navigate=useNavigate();
    const { CarritoEstado } = useContext(CarritoContext);
    const [total, setTotal] = useState(0)
    
    const calcularTotal = () => {
        const data= CarritoEstado.reduce((acumulador, producto) => acumulador + producto.precio, 0);
        setTotal(data);
    };

    const verificarPago=async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        if (!token) {
            alert("Debe iniciar sesión.");
            navigate("/iniciarSesion", { replace: true });
            return;
        }

        if (CarritoEstado.length === 0) {
            alert("Tu carrito está vacío.");
            return;
        }
        //ejecuto la compra
        let compras={
                id_usuario:localStorage.getItem('id_usuario'), 
                cantidad_proyectos: CarritoEstado.length, 
                monto_total:total
            }
        // Enviar la compra al servidor
        const response = await fetch(`${import.meta.env.VITE_URL_BACK}/nuevaCompra`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            body: JSON.stringify(compras)        
        });
        // Verificar la respuesta del servidor
        const res= await response.json();
             
        // Si la compra fue exitosa, se guarda el ID de la compra
        if (res.id) {
            for (const producto of CarritoEstado) {
                const compraProducto = {
                    id_compra: res.id,
                    id_usuario: localStorage.getItem('id_usuario'), 
                    id_proyecto: producto.id_proyecto, 
                    tipo_proyecto: producto.opcion,
                    precio_unitario: producto.precio
                };

                // Enviar el producto de la compra al servidor
                const responseProducto = await fetch(`${import.meta.env.VITE_URL_BACK}/insertMisProyecto`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': localStorage.getItem('token')
                    },
                    body: JSON.stringify(compraProducto)        
                });

                const resProducto = await responseProducto.json();

                if (!resProducto.id) {
                    console.error("Error al registrar producto:", resProducto);
                }
            }

            alert("Compra realizada con éxito");
            navigate("/perfilDeUsuario", { replace: true });

        } else {
            console.log("Error al procesar la compra:", res);
        }
        
    }

    useEffect(() => {
        calcularTotal();
    }, [CarritoEstado,total]);

    return (
        <div className="pago-container">
            <h2>Detalle de la compra</h2>
            <p>Productos {CarritoEstado.length}</p>
            <div className="total-container">
            <h3>Total: ${total}</h3>
            <button className="checkout-button" onClick={verificarPago}>Proceder al pago</button>
            </div>
        </div>
    );
};

export default PagoCarrito;