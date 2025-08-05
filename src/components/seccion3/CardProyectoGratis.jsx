import { useNavigate } from 'react-router-dom'


import bgCasa2 from '../../assets/bg-casa2.png'
import bgCasa3 from '../../assets/bg-casa3.jpg'
import bgCasa4 from '../../assets/bg-casa4.jpg'

export const CardProyectoGratis = () => {
    const navigate = useNavigate();
    return (
        <div className='proyectoGratis' >
            <div className="fotos">
                <img src={bgCasa4} alt="Imagen portada" />
                <img src={bgCasa3} alt="Imagen portada" />
                <img src={bgCasa2} alt="Imagen portada" />
            </div>
            <div className="textosYcta">
                <h1>
                    Encontrá acá tu proyecto GRATIS
                </h1>
                <p>
                    Estás muy cerca de hacerlo realidad
                </p>
                <button onClick={() => navigate("/proyectoGratis")} className="btnVerProyecto">Ver proyecto</button>
            </div>
        </div>
    )
}
