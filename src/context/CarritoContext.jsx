import { createContext, useEffect, useState } from 'react'

//useContext para poder manejar el carrito de compras en toda la aplicacion
export const CarritoContext = createContext();

export const CarritoProvider=({ children })=>{

    const [CarritoEstado, setCarritoEstado] = useState([]);
    

    const agregarAlCarrito = ({producto}) => {
        setCarritoEstado([producto,...CarritoEstado]);
    }

    const eliminarDelCarrito = (id) => {
        const nuevoCarrito = CarritoEstado.filter((producto) => producto.id_proyecto !== id);
        setCarritoEstado(nuevoCarrito);
        
    }
  return (
    <CarritoContext.Provider value={{CarritoEstado,agregarAlCarrito,eliminarDelCarrito}}>
      {children}
    </CarritoContext.Provider>
  )
}
