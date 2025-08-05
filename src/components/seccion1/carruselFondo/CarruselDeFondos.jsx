import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

/* import ImagenDeFondo from '../../../components/ImagenDeFondo'; */
import ImagenDeFondo from '../../../components/seccion1/fondo/Fondo';

import fondo1 from '../../../assets/carrusel/bg-casa2.png';
import fondo2 from '../../../assets/carrusel/bg-casa3.jpg';
import fondo3 from '../../../assets/carrusel/bg-casa4.jpg';

export default function CarruselDeFondos() {
    const imagenes = [
        { contenido: <ImagenDeFondo img={fondo1} /> },
        { contenido: <ImagenDeFondo img={fondo2} /> },
        { contenido: <ImagenDeFondo img={fondo3} /> },
    ];

    return (        
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={false} // Flechas de navegación deshabilitadas
            pagination={{ clickable: false }}
            autoplay={{
                delay: 3000, // Transición cada 3 segundos
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
            }}
            loop={true} // Sin repetición de carrusel
            speed={1000} // Velocidad de transición
            className="carrusel-de-imagenes"
            onInit={(swiper) => {
                // Ajuste manual del transform inicial (traslación)
                swiper.wrapperEl.style.transform = 'translate3d(100%, 0px, 0px)'; // Inicia en 1281px
            }}
            onSlideChange={(swiper) => {
                const index = swiper.activeIndex % imagenes.length; // Calculamos el índice activo
                let translateValue = '0px'; // Valor de la traslación inicial

                // Ajustamos la traslación según el índice del slide
                if (index === 0) translateValue = '100%'; // Ajustamos la traslación para el primer slide
                if (index === 1) translateValue = '0px'; // Ajustamos la traslación para el segundo slide
                if (index === 2) translateValue = '-100%'; // Ajustamos la traslación para el tercer slide

                // Actualizamos el transform manualmente
                swiper.wrapperEl.style.transform = `translate3d(${translateValue}, 0px, 0px)`;
                /* console.log(`Active Index: ${index} | Translate: ${translateValue}`); */
            }}
            slidesPerView={1} // Solo una diapositiva visible a la vez
        >
            {imagenes.map((slide, index) => (
                <SwiperSlide key={index}>
                    {slide.contenido}
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
