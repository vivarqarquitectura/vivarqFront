import  TextoPortada  from "../../components/seccion1/textoPortada/TextoPortada"
import  NavBar  from "../../components/seccion1/navBar/NavBar";
import Carrusel  from "../../components/seccion1/carrusel/Carrusel";
import CarruselDeFondos from "../../components/seccion1/carruselFondo/CarruselDeFondos";
import { CardProyectoGratis } from "../../components/seccion3/CardProyectoGratis";
import { FormasDePago } from "../../components/seccion5/formasDePago";
import { Footer } from "../../components/seccion6/Footer";
import ListarProyectos from "../../components/seccion4/ListarProyectos";

import gifPlano from '../../assets/GIF/gifPlanoMedidas.gif'
import giRenders from '../../assets/GIF/gifRenders.gif'
import materialesConstructivos3 from '../../assets/GIF/materialesConstructivos3.gif'


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
                    <TextoPortada />
                    <Carrusel />{/*renderiza  <ImgPortada /> */}
                </div>
            </div>
            <div className="seccion2a">
                <img src={gifPlano} alt="gg" />
                <div className="planosConMedidas">
                    <h1>1 | Planos con medidas</h1>
                    <p>Planos con medidas y especificaciones técnicas que permitirá a los obreros obtener la información necesaria para la construcción de la obra.</p>
                </div>
            </div>
            <div className="seccion2b">
                <div className="planosConMedidas">
                    <h1>2 |Imágenes en 3D</h1>
                    <p>Imágenes y videos de tu futura obra con todos los detalles y gustos a medida para explorar opciones posibles</p>
                </div>
                <img src={giRenders} alt="gg" />
                
            </div>
            <div className="seccion2a">
                <img src={materialesConstructivos3} alt="gg" />
                <div className="planosConMedidas">
                    <h1>3 | Materiales necesarios</h1>
                    <p>Lista de materiales necesarios para la construcción de la obra, especificado por materiales y sus cantidades como así también sus respectivas dimensiones.</p>
                </div>
            </div>

            <div className="cardProyectoGratis" >
                <CardProyectoGratis/>
            </div>
            <div className="cardProyectos">
                <ListarProyectos/> 
            </div>

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


