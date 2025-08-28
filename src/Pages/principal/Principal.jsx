import { useRef } from "react";
import  TextoPortada  from "../../components/seccion1/textoPortada/TextoPortada"
import  NavBar  from "../../components/seccion1/navBar/NavBar";
import Carrusel  from "../../components/seccion1/carrusel/Carrusel";
import CarruselDeFondos from "../../components/seccion1/carruselFondo/CarruselDeFondos";
import { CardProyectoGratis } from "../../components/seccion3/CardProyectoGratis";
import { FormasDePago } from "../../components/seccion5/FormasDePago";
import { Footer } from "../../components/seccion6/Footer";
import ListarProyectos from "../../components/seccion4/ListarProyectos";
import TarjetaPasos from "../../components/seccion2/TarjetaPasos"




//CSS Paginas
import '../../styles/pages/principal/principal.css'

//CSS Componentes
import '../../styles/components/Fondo/fondo.css'
import '../../styles/components/textoPortada/textoPortada.css'
import '../../styles/components/seccion2/tarjetaGuia.css'
import '../../styles/components/seccion3/cardProyectoGratis.css'
import '../../styles/components/seccion4/tarjetaProyecto.css'
import '../../styles/components/seccion5/formasDePago.css'
import '../../styles/components/seccion6/footer.css'


export  default function App() {

    const proyectosRef = useRef(null);

const handleVerProyecto = () => {
    if (proyectosRef.current) {
        proyectosRef.current.scrollIntoView({ behavior: "smooth"});
    } else {
        console.warn("proyectosRef está null");
    }
};

return (
    <div>
        {/* <ImagenDeFondo /> */}
        <div className="carrusel-wrapper">  
            <CarruselDeFondos/>
        </div>
        <div className="formatoPrincipal"> {/* Esta clase global organizará al 80% todas las páginas */}
            <div className="principal">
                  {/* Coloca el NavBar al inicio */}
                <NavBar />

                <div className="org-comp_principal">
                {/* Asegúrate de que el TextoPortada y ImgPortada no estén comentados */}
                    <TextoPortada onVerProyecto={handleVerProyecto}/>
                    <Carrusel />{/*renderiza  <ImgPortada /> */}
                </div>
            </div>
            
            <TarjetaPasos/>

            <div className="cardProyectoGratis" >
                <CardProyectoGratis/>
            </div>
            
            <section  className="sectionProyectos">
                <h2>Tu próximo proyecto</h2>
                <hr />
                <div className="cardProyectos">
                    <ListarProyectos innerRef={proyectosRef}/> 
                </div>
            </section >

            {/* 
            componente de galeria de imagenes
            <div className="formasDePago">
                <GridProyectos images={images} />
            </div> */}

            

            <div className="formasDePago">
                <FormasDePago />
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    </div>
)
}


