import { useLocation } from "react-router-dom";
import ImgFondoProyecto from "../../components/seccionProyectos/seccion1/fondo/ImgFondoProyecto";
import ImgPortadaProyecto from "../../components/seccionProyectos/seccion1/imgPortada/ImgPortadaProyecto";
import TextoPortadaProyecto from "../../components/seccionProyectos/seccion1/textoPortadaProyecto/TextoPortadaProyecto";
import  NavBar  from "../../components/seccion1/navBar/NavBar";
import CardPlanoConMedidas from "../../components/seccionProyectos/seccion3/planoConMedidas/CardPlanoConMedidas"
import CardInformacionProyecto from "../../components/seccionProyectos/seccion2/cardInformacionProyecto/CardInformacionProyecto";
import PlanoConMedida1 from '../../assets/imgProyectos/imgProyecto1/planoConMedida1.jpg'
import CardImaganes3d from "../../components/seccionProyectos/seccion3/imagenes3d/CardImaganes3d";
import CardMateriales from "../../components/seccionProyectos/seccion4/cardMateriales/CardMateriales";
import CardTarifas4 from "../../components/seccionProyectos/seccion5/tarifas/CardTarifas4";
import { Footer } from "../../components/seccion6/Footer";


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
import bgCasa3 from '../../assets/bg-casa3.jpg'
import ci3d1 from '../../assets/imgProyectos/imgProyecto1/ci3d1.png'
import ci3d2 from '../../assets/imgProyectos/imgProyecto1/ci3d2.png'
import ci3d3 from '../../assets/imgProyectos/imgProyecto1/ci3d3.png'
import ci3d4 from '../../assets/imgProyectos/imgProyecto1/ci3d4.png'
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


export default function ProyectoGratis() {
    return (
        <>
            <ImgFondoProyecto img={bgCasa3} />
            <div className="formatoPrincipal"> {/* Esta clase global organizará al 80% todas las páginas */}
                <div className="principal">
                      {/* Coloca el NavBar al inicio */}
                    <NavBar />
                    <div className="org-comp_principal">
                    {/* Asegúrate de que el TextoPortada y ImgPortada no estén comentados */}
                        <TextoPortadaProyecto 
                            tituloh3={'Estilo'}
                            tituloh1={'Inicial'}
                            subTituloh3={'minicasa'}
                        />
                        <ImgPortadaProyecto imgPortada={bgCasa3}/>
                    </div>
                </div>
                
                {/* <div className="cardInformacionProyecto" >
                    <CardInformacionProyecto />
                </div> */}
                <div className="cardPlanosConMedidas">
                        <CardPlanoConMedidas
                            imgPlanoConMedida={PlanoConMedida1}
                            pcm1={pcm1}
                            pcm2={pcm2}
                            pcm3={pcm3}
                        />
                </div>
                <div className="cardImagenes3d">
                        <CardImaganes3d
                            ci3d1={ci3d1}
                            ci3d2={ci3d2}
                            ci3d3={ci3d3}
                            ci3d4={ci3d4}
                        />
                </div>
                <div className="cardMateriales">
                    <CardMateriales
                        mat1={ladrillos}
                        mat2={chapas}
                        mat3={cemento}
                        mat4={aislantes}
                        mat5={hormigon}
                        cm1={cm1}
                        cm2={cm2}
                        cm3={cm3}
                    />
                </div>
                <div className="cardTarifas">
                    
                    <CardTarifas4
                        opcion={'Premium'}
                        precio={'20.000'}
                    />
                </div>
                <div className="footer">
                    <Footer/>
                </div>
            </div>
        </>
    )
}
