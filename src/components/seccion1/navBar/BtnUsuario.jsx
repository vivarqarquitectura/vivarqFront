import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/components/navBar/btnUsuario.css";

const BtnUsuario = ({ imagenUrl }) => {
    const [menuAbierto, setMenuAbierto] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setMenuAbierto(!menuAbierto);
    };

    const handleOpcionClick = (ruta) => {
        navigate(ruta);
        setMenuAbierto(false);
    };

    const cerrarSesion = () => {
        console.log("cerrar sesion");
        localStorage.clear();
        navigate("/",{ replace: true });
    };

    return (
        <div className="avatar-wrapper">
            {/* Botón del usuario */}
            <div className="avatar-container" onClick={toggleMenu}>
                <img src={imagenUrl} alt="Usuario" className="avatar-image" />
            </div>

            {/* Menú desplegable */}
            {menuAbierto && (
                <div className="menu-opciones">
                    {/* Flecha que apunta al botón */}
                    <div className="menu-flecha"></div>

                    <ul>
                        <li onClick={() => handleOpcionClick("/perfilDeUsuario")}>Mi Perfil</li>
                        <li onClick={() => handleOpcionClick("/configuracion")}>Configuración</li>
                        <li className="opcion-cerrar-sesion" onClick={cerrarSesion}>Cerrar sesión</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default BtnUsuario;
