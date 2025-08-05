import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ImgPortada from '../../../components/seccion1/imgPortada/ImgPortada';

import carrusel1 from '../../../assets/carrusel/bg-casa2.png';
import carrusel2 from '../../../assets/carrusel/bg-casa3.jpg';
import carrusel3 from '../../../assets/carrusel/bg-casa4.jpg';

export default function Carrusel() {
    const slides = [
        { portada: <ImgPortada img={carrusel1} /> },
        { portada: <ImgPortada img={carrusel2} /> },
        { portada: <ImgPortada img={carrusel3} /> },
    ];

    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation = {false} //Añade con true las flechas de navegación manual
            pagination={{ clickable: true }}
            autoplay={{
                delay: 3000, // 3 segundos de transición entre imágenes
                disableOnInteraction: true,
                pauseOnMouseEnter: false,
            }}
            loop={false} // Habilitamos el loop para el comportamiento de carrusel
            speed={1000} // Velocidad de la transición entre slides
            className="carrusel"
            onInit={(swiper) => {
                // Ajusta manualmente el transform inicial
                swiper.wrapperEl.style.transform = 'translate3d(600px, 0px, 0px)';
            }}
            onSlideChange={(swiper) => {
                const index = swiper.activeIndex % slides.length;
                let translateValue = '0px';

                if (index === 0) translateValue = '600px';
                if (index === 2) translateValue = '-600px';

                // Actualiza manualmente el transform
                swiper.wrapperEl.style.transform = `translate3d(${translateValue}, 0px, 0px)`;
                /*PARA COMPROBAR SI SALEN LAS IMAGENES Y CADA CUANTO DESPLAZA console.log(`Active Index: ${index} | Translate: ${translateValue}`); */
            }}
            slidesPerView={1} // Solo una diapositiva visible a la vez
            
            
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    {slide.portada}
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
