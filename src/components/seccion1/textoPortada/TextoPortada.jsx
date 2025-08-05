import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Cambiado de useHistory a useNavigate

function TextoPortada() {
    const [currentRoute, setCurrentRoute] = useState(0); // Estado para la ruta actual
    const navigate = useNavigate(); // Hook de navegación para React Router v6

    // Definir las rutas
    const rutas = [
        '/ruta1', // Ruta 1
        '/ruta2', // Ruta 2
        '/ruta3', // Ruta 3
    ];

    useEffect(() => {
        // Cambiar la ruta automáticamente cada 3 segundos
        const interval = setInterval(() => {
            setCurrentRoute((prevRoute) => (prevRoute + 1) % rutas.length);
        }, 3000); // 3000 ms = 3 segundos

        return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
    }, []);

    const handleClick = () => {
        // Redirigir a la ruta actual cuando el usuario haga clic en el botón
        navigate(rutas[currentRoute]);
    };

    return (
        <div className="textoPortada">
            <h3 className="tituloH3">Encuentra</h3>
            <h1 className="tituloH1">La casa de <br />tus sueños</h1>
            <h3 className="subTituloH3">y descubre cómo hacerla realidad tu mismo</h3>
            <button className="btnVerProyecto" onClick={handleClick}>Ver Proyecto</button>
        </div>
    );
}

export default TextoPortada;
