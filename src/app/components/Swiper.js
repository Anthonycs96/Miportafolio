import { Swiper, SwiperSlide } from 'swiper/react';
import '../../../node_modules/swiper/swiper-bundle.css'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Usar los módulos importados directamente en el componente Swiper
const ProjectsSection = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true} // Habilitar el bucle infinito
      modules={[Navigation, Pagination, Autoplay]} // Configura los módulos aquí
      touchStartPreventDefault={false} // Permite desplazamiento táctil
     
    >
      <SwiperSlide>
        <div className="p-9 rounded shadow content-wrapper">
          <h3 className="text-2xl font-bold mb-2">Proyecto 1</h3>
          <p>Descripción del Proyecto 1.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-9 rounded shadow content-wrapper">
          <h3 className="text-2xl font-bold mb-2">Proyecto 2</h3>
          <p>Descripción del Proyecto 2.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-9 rounded shadow content-wrapper">
          <h3 className="text-2xl font-bold mb-2">Proyecto 3</h3>
          <p>Descripción del Proyecto 3.</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default ProjectsSection;
