//Estilos
import '../../styles/components/seccionCarrito/carrito.css';

    const Carrito = ({CarritoEstado,eliminarDelCarrito}) => {
      return (
        <div className="carrito-container">
          <h2>Productos</h2>
          <div className="bento-grid">
             {CarritoEstado.map(producto => (
              <div className="bento-item">
                <button className='eliminarItem' onClick={()=>{eliminarDelCarrito(producto.id_proyecto)}}>X</button>
                <img src={`${import.meta.env.VITE_URL_IMAGENES_VISTA_PREVIA}/${producto.img_proyecto}`} alt={producto.nombre} />
                <h3>{producto.nombre}</h3>
                <p>{producto.opcion}</p>
                <p>${producto.precio}</p>
              </div>
            ))}
          </div>
        </div>
      );
    };

export default Carrito;