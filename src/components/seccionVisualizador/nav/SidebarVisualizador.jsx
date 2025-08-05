import React, {useState, useEffect} from "react";
//iconos
import { FaArrowRight, FaArrowLeft, FaArrowUp, FaArrowDown  } from "react-icons/fa";
import { FaRulerCombined } from "react-icons/fa6";
import { IoConstruct } from "react-icons/io5";
import { MdPermMedia } from "react-icons/md";
import { IoHomeSharp } from "react-icons/io5";

//Estilos
import '../../../styles/components/seccionVisualizador/nav/sidebarVisualizador.css'


export const SidebarVisualizador = ({onSeleccionar}) => {
    const [contenedorVisible, setContenedorVisible] = useState("planos");

    const [menuVisible, setMenuVisible] = useState(true);

    const [menuIconos, setMenuIconos] = useState(true);

    const [isMobile, setIsMobile] = useState(false);

    // Detectar si el dispositivo es móvil
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 425); // Cambia según el breakpoint de tu diseño
        };

        handleResize(); // Ejecutar al cargar
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    
    const manejarClickIcono = (seccion) => {
        setContenedorVisible(seccion);
    }

    const manejarClick = (e) => {
        const nombrePlano = e.target.innerText;
        onSeleccionar(nombrePlano); 
    }

    const manejarClickMisProyectos = () => {
        const toggleMenu = () => {
            setMenuVisible(!menuVisible); // Alterna la visibilidad del menú
        };
        toggleMenu();
    
        const toggleMenuIconos = () => {
            setMenuIconos(!menuIconos); // Alterna la visibilidad del menú
        }
        toggleMenuIconos();
    }  



    return (
    <>
        <div className={`menuIconos ${menuIconos ? "visibleIco" : "ocultoIco"}` }>
            <div className="icoToggle" onClick={manejarClickMisProyectos}>
                <div className="contenedorIcono">
                {isMobile
                            ? menuVisible
                                ? <FaArrowDown /> // Menú visible en móviles
                                : <FaArrowUp /> // Menú oculto en móviles
                            : menuVisible
                                ? <FaArrowLeft /> // Menú visible en escritorio
                                : <FaArrowRight /> // Menú oculto en escritorio
                }
                </div>
            </div>
            <div className="icoOpciones">
                <FaRulerCombined onClick={() => manejarClickIcono("planos")} />
                <IoConstruct onClick={() => manejarClickIcono("materiales")} />
                <MdPermMedia onClick={() => manejarClickIcono("renders")} />
            </div>
            <div className="icoMisProyectos">
                <IoHomeSharp />
            </div>
        </div>
        <nav className={`sidebarVisualizador ${menuVisible ? "visible2" : "oculto2"}` } >
            
            {/**Planos */}
            <div className={`menuOpciones ${menuVisible ? "visible2" : "oculto2"} ${contenedorVisible === "planos" ? "visible" : "oculto"}`}>
                <div className="opcionTitulo">
                    <h1>Planos</h1>
                </div>
                <div className="opcionCategoria">
                    <ul>
                        <h3>Planos generales</h3>
                        <li onClick={manejarClick}>Planta de replanteo</li>
                        <li onClick={manejarClick}>Planta cimientos</li>
                        <li onClick={manejarClick}>Planta baja</li>
                        <li onClick={manejarClick}>Planta de techos</li>
                        <li onClick={manejarClick}>Planta amoblada</li>
                        
                        <h3>Cortes y vistas</h3>
                        <li onClick={manejarClick}>Corte longitudinal</li>
                        <li onClick={manejarClick}>Corte transversal</li>
                        <li onClick={manejarClick}>Fachada</li>
                        
                        <h3>Instalaciones</h3>
                        <li onClick={manejarClick}>Planta eléctrica</li>
                        <li onClick={manejarClick}>Planta red de agua fría y caliente</li>
                        <li onClick={manejarClick}>Planta desagües</li>
                        
                        <h3>Esquemas</h3>
                        <li onClick={manejarClick}>Aberturas</li>
                        <li onClick={manejarClick}>Detalles constructivos</li>
                    </ul>
                </div>
                <div className="opcionMisProyectos">
                    <h1>Mis proyectos</h1>
                </div>
            </div>
            {/**Materiales */}
            <div className={`menuOpciones  ${menuVisible ? "visible2" : "oculto2"} ${contenedorVisible === "materiales" ? "visible" : "oculto"}`}>
                <div className="opcionTitulo">
                    <h1>Materiales</h1>
                </div>
                <div className="opcionCategoria">
                    <ul>
                        <h3>Cimientos</h3>
                        <li onClick={manejarClick}>Planta de replanteo</li>
                        
                        <h3>Estructuras</h3>
                        <li onClick={manejarClick}>Corte longitudinal</li>
                        
                        <h3>Albañilería</h3>
                        <li onClick={manejarClick}>Planta eléctrica</li>
                        
                        <h3>Revoques</h3>
                        <li onClick={manejarClick}>Aberturas</li>
                        
                        <h3>Techos</h3>
                        <li onClick={manejarClick}>Aberturas</li>

                        <h3>Aberturas</h3>
                        <li onClick={manejarClick}>Aberturas</li>

                        <h3>Revestimientos</h3>
                        <li onClick={manejarClick}>Aberturas</li>

                        <h3>Instalaciones sanitarias</h3>
                        <li onClick={manejarClick}>Aberturas</li>

                        <h3>Instalaciones eléctricas</h3>
                        <li onClick={manejarClick}>Aberturas</li>

                        <h3>Pintura y terminaciones</h3>
                        <li onClick={manejarClick}>Aberturas</li>
                    </ul>
                </div>
                <div className="opcionMisProyectos">
                    <h1>Mis proyectos</h1>
                </div>
            </div>
            {/**Renders */}
            <div className={`menuOpciones  ${menuVisible ? "visible2" : "oculto2"} ${contenedorVisible === "renders" ? "visible" : "oculto"}`}>
                <div className="opcionTitulo">
                    <h1>Renders</h1>
                </div>
                <div className="opcionCategoria">
                    <ul>
                        <h3>Exterior</h3>
                        <li onClick={manejarClick}>Planta de replanteo</li>
                        
                        <h3>Interior</h3>
                        <li onClick={manejarClick}>Corte longitudinal</li>
                        
                        <h3>Conceptual</h3>
                        <li onClick={manejarClick}>Planta eléctrica</li>
                        
                        <h3>Detalles constructivos</h3>
                        <li onClick={manejarClick}>Aberturas</li>
                    </ul>
                </div>
                <div className="opcionMisProyectos">
                    <h1>Mis proyectos</h1>
                </div>
            </div>
        </nav>
    </>
);

}
