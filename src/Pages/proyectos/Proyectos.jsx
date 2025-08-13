import { useLocation, useParams } from "react-router-dom";
import ImgFondoProyecto from "../../components/seccionProyectos/seccion1/fondo/ImgFondoProyecto";
import ImgPortadaProyecto from "../../components/seccionProyectos/seccion1/imgPortada/ImgPortadaProyecto";
import TextoPortadaProyecto from "../../components/seccionProyectos/seccion1/textoPortadaProyecto/TextoPortadaProyecto";
import  NavBar  from "../../components/seccion1/navBar/NavBar";
import CardPlanoConMedidas from "../../components/seccionProyectos/seccion3/planoConMedidas/CardPlanoConMedidas"
import CardInformacionProyecto from "../../components/seccionProyectos/seccion2/cardInformacionProyecto/CardInformacionProyecto";
import CardImaganes3d from "../../components/seccionProyectos/seccion3/imagenes3d/CardImaganes3d";
import CardMateriales from "../../components/seccionProyectos/seccion4/cardMateriales/CardMateriales";
import CardTarifas1 from "../../components/seccionProyectos/seccion5/tarifas/CardTarifas1";
import CardTarifas2 from "../../components/seccionProyectos/seccion5/tarifas/CardTarifas2";
import CardTarifas3 from "../../components/seccionProyectos/seccion5/tarifas/CardTarifas3";
import { CardProyectoGratis } from "../../components/seccion3/CardProyectoGratis";
import { Footer } from "../../components/seccion6/Footer";

//import de navigate
import {useNavigate} from 'react-router-dom'
//CSS Paginas
import '../../styles/pages/principal/principal.css'
import '../../styles/pages/proyectos/proyectos.css'

//CSS Componentes
import '../../styles/components/textoPortada/textoPortada.css'
import '../../styles/components/seccion2/tarjetaGuia.css'
import '../../styles/components/seccion3/cardProyectoGratis.css'
import '../../styles/components/seccion4/tarjetaProyecto.css'
import '../../styles/components/seccion5/formasDePago.css'
import '../../styles/components/seccion6/footer.css'
import '../../styles/components/seccionProyectos/seccion1/fondo/imgFondoProyecto.css'
import '../../styles/components/seccionProyectos/seccion1/imgPortada/imgPortadaProyecto.css'
import '../../styles/components/seccionProyectos/seccion2/cardInformacionProyecto.css'
import '../../styles/components/seccionProyectos/seccion3/cardPlanoConMedidas.css'
import '../../styles/components/seccionProyectos/seccion3/cardImagenes3d.css'
import '../../styles/components/seccionProyectos/seccion4/cardMateriales.css'
import '../../styles/components/seccionProyectos/seccion5/cardTarifas.css'

//Import de imagenes necesarias
import pcm1 from '../../assets/imgPlanosConMedidas/IMG-Cortes.png'
import pcm2 from '../../assets/imgPlanosConMedidas/IMG-Detalle-constructivo.png'
import pcm3 from '../../assets/imgPlanosConMedidas/IMG-Planta-general.png'
import cm1 from '../../assets/imgProyectos/imgProyecto1/IMG-mat1.png'
import cm2 from '../../assets/imgProyectos/imgProyecto1/IMG-mat2.png'
import cm3 from '../../assets/imgProyectos/imgProyecto1/IMG-mat3.png'
//Import de imagenes en materiales
import ladrillos from '../../assets/imgMateriales/ladrillos.png'
import chapas from '../../assets/imgMateriales/chapas.png'
import cemento from '../../assets/imgMateriales/cemento.png'
import aislantes from '../../assets/imgMateriales/aislantes.png'
import hormigon from '../../assets/imgMateriales/hormigon.png'
import { useContext, useEffect, useState } from "react";
import { CarritoContext } from "../../context/CarritoContext";


export default function Proyectos() {
    const navigate=useNavigate();
    const location = useLocation();
    const {iconos } = location.state || {};
    const {id_proyecto}=useParams(); // Si no estás usando los parámetros de la URL, puedes omitir esta línea
    const [proyecto, setProyecto] = useState({});
    const {agregarAlCarrito} = useContext(CarritoContext);


    const obtenerProyectoPorId = async() => {
        const respuesta=await fetch(`${import.meta.env.VITE_URL_BACK}/proyectos_render/${id_proyecto}`);
        const res=await respuesta.json();
        setProyecto(res[0]);
    }

    useEffect(() => {
      obtenerProyectoPorId();
    }, [])

    const agregarCarrito = (precio,opcion) => {
        const producto = {
            id_proyecto: proyecto.id_proyecto,
            img_proyecto: proyecto.img_proyecto,
            nombre: proyecto.nombre,
            cantidad: 1,
            opcion,
            precio
        };
        agregarAlCarrito({producto});
        navigate("/seccionCarrito",{ replace: true });
    }

    
    return (
        <>
            <ImgFondoProyecto img={`${import.meta.env.VITE_URL_IMAGENES_VISTA_PREVIA}/${proyecto.img_proyecto}`} />
            <div className="formatoPrincipal"> {/* Esta clase global organizará al 80% todas las páginas */}
                <div className="principal">
                      {/* Coloca el NavBar al inicio */}
                    <NavBar />
                    <div className="org-comp_principal">
                    {/* Asegúrate de que el TextoPortada y ImgPortada no estén comentados */}
                        <TextoPortadaProyecto 
                            tituloh3={'Estilo'}
                            tituloh1={proyecto.nombre}
                            subTituloh3={proyecto.estilo}
                        />
                        <ImgPortadaProyecto imgPortada={`${import.meta.env.VITE_URL_IMAGENES_VISTA_PREVIA}/${proyecto.img_proyecto}`}/>
                    </div>
                </div>
                
                <div className="cardInformacionProyecto" >
                    <CardInformacionProyecto 
                        iconos={iconos}
                        
                    />
                </div>
                <div className="cardPlanosConMedidas">
                        <CardPlanoConMedidas
                            imgPlanoConMedida={`${import.meta.env.VITE_URL_IMAGENES_VISTA_PREVIA}/${proyecto.img_plano_con_medida}`}
                            pcm1={pcm1}
                            pcm2={pcm2}
                            pcm3={pcm3}
                        />
                </div>
                <div className="cardImagenes3d">
                        <CardImaganes3d
                            ci3d1={`${import.meta.env.VITE_URL_IMAGENES_VISTA_PREVIA}/${proyecto.render_uno}`}
                            ci3d2={`${import.meta.env.VITE_URL_IMAGENES_VISTA_PREVIA}/${proyecto.render_dos}`}
                            ci3d3={`${import.meta.env.VITE_URL_IMAGENES_VISTA_PREVIA}/${proyecto.render_tres}`}
                            ci3d4={`${import.meta.env.VITE_URL_IMAGENES_VISTA_PREVIA}/${proyecto.render_cuatro}`}
                        />
                </div>
                <div className="cardMateriales">
                    <CardMateriales
                        mat1={ladrillos}
                        cantLadrillos={proyecto.ladrillo}
                        mat2={chapas}
                        cantChapas={proyecto.chapa}
                        mat3={cemento}
                        cantCemento={proyecto.cemento}
                        mat4={aislantes}
                        cantAislantes={'20m2'}
                        mat5={hormigon}
                        cantHormigon={'2m3'}
                        cm1={cm1}
                        cm2={cm2}
                        cm3={cm3}
                    />
                </div>
                <div className="cardImagenes3d">
                    <h2>Vista previa del modelo</h2>
                    <iframe src="https://3dwarehouse.sketchup.com/embed/d7abd576-904c-464f-86aa-764e315ca870?token=j_TqCfIe6Sc=&binaryName=s21" 
                            frameborder="0" 
                            scrolling="no" 
                            marginheight="0" 
                            marginwidth="0" 
                            width="100%" 
                            height="600px" 
                            allowfullscreen
                        >
                    </iframe>
                </div>
                <div className="cardTarifas">
                    <CardTarifas1
                        opcion={'Esencial'}
                        precio={proyecto.esencial}
                        agregarCarrito={agregarCarrito}
                    />
                    <CardTarifas2
                        opcion={'Avanzado'}
                        precio={proyecto.avanzado}
                        agregarCarrito={agregarCarrito}
                    />
                    <CardTarifas3
                        opcion={'Premium'}
                        precio={proyecto.premium}
                        agregarCarrito={agregarCarrito}
                    />
                </div>
                
                <div className="cardProyectoGratis" >
                    <CardProyectoGratis/>
                </div>
                    
                <div className="footer">
                    <Footer/>
                </div>
            </div>
        </>
    )
}
