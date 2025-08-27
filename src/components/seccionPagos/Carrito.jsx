import { useNavigate } from "react-router-dom";
import Skeleton from '../skeleton/Skeleton';
import Casita_con_horizonte from '../../assets/carrito/casita_con_horizonte.png'
//Estilos
import '../../styles/components/seccionCarrito/carrito.css';
const Carrito = ({ CarritoEstado, eliminarDelCarrito, isLoading = false }) => {
  
  const stillLoading = isLoading || CarritoEstado === null;

  const navigate = useNavigate();

  if (stillLoading) {
    return (
      <div className="carrito-container">
        <h2>Productos</h2>
        <Skeleton count={3} />
      </div>
    );
  }

if (!Array.isArray(CarritoEstado) || CarritoEstado.length === 0) {
  return (
    <div className="carrito-container">
      <h2>Productos</h2>
      <div className="carrito-vacio">
        <img
          src={Casita_con_horizonte} // 👉 poné aquí la ruta de tu ilustración
          alt="Carrito vacío"
          className="carrito-vacio-img"
        />
        <h3>Tu carrito está vacío</h3>
        <p>Cuando agregues tus proyectos, aparecerán aquí.</p>
        <button onClick={() => navigate("/")}>
          Explorar proyectos
        </button>
      </div>
    </div>
  );
}


  return (
    <div className="carrito-container">
      <h2>Productos</h2>
      <div className="bento-grid">
        {CarritoEstado.map(producto => (
          <div className="bento-item" key={producto.id_proyecto}>
            <button
              className="eliminarItem"
              onClick={() => eliminarDelCarrito(producto.id_proyecto)}
              aria-label={`Eliminar ${producto.nombre} del carrito`}
            >
              X
            </button>
            <img
              src={`${import.meta.env.VITE_URL_IMAGENES_VISTA_PREVIA}/${producto.img_proyecto}`}
              alt={producto.nombre}
              loading="lazy"
            />
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
