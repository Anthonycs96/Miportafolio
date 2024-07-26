// pages/index.js
"use client";
import { useState, useEffect } from "react";
import Navbar from "../app/components/Navbar";
import Swiper from "../app/components/Swiper";
import Image from "next/image";
import fotoSinFondo from "../app/images/fotex.png";


const Home = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Estado de carga inicial


  // Función para detectar el tamaño de la pantalla
  const handleResize = () => {
    setIsMobileView(window.innerWidth < 768); // Ajusta 768 según el punto de ruptura deseado
  };

  // Función para manejar la carga inicial y evitar el parpadeo
  useEffect(() => {
    handleResize(); // Llama a la función al inicio para establecer el estado inicial

    // Agrega un pequeño tiempo de espera para asegurar la detección precisa
    setTimeout(() => {
      setIsLoading(false); // Marca que la carga inicial ha terminado
    }, 100);

    // Suscripción al evento de cambio de tamaño de la ventana
    window.addEventListener("resize", handleResize);

    // Limpia el listener al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      className={`flex flex-col overflow-hidden ${isLoading ? "hidden" : ""}`}
    >
      <Navbar />

      {/* Sección #Inicio para pantallas grandes */}
      {!isMobileView && (
        <section
          id="Inicio"
          className="min-h-screen flex items-center justify-center md:flex"
        >
          <div className="flex flex-col md:flex-row items-center p-4  ">
            <div className="w-full text-center md:text-left md:pr-20">
              <div>
                <span className="titulo-p text-4xl md:text-7xl text-amber-500">
                  Hola
                </span>
              </div>
              <div>
                <span className="titulo-p text-4xl md:text-7xl">
                  Soy Anthony Carhuayalle
                </span>
              </div>
              <p className="text400 text-2xl md:text-4xl mt-2">
                Developer Junior
              </p>
              <div className="mt-4 md:flex">
              <button className=" border border-slate-300 hover:border-amber-600 text-white font-bold py-2 px-4 rounded text-1xl mr-10 transition-transform duration-300 transform hover:scale-105">
                  CONTACTAME
                </button>
                <button className="border border-slate-300 hover:border-amber-600 text-white font-bold py-2 px-4 rounded text-1xl  transition-transform duration-300 transform hover:scale-105">
                  DESCARGAR CV
                </button>
              </div>
            </div>
            <div className="w-1/2 flex justify-center items-center">
              <Image
                src={fotoSinFondo}
                alt="Foto de perfil"
                width={400}
                height={400}
                objectFit="cover"
                className="rounded-full"
              />
            </div>
          </div>
        </section>
      )}

      {/* Sección #movil para pantallas móviles */}
      {isMobileView && (
        <section
          id="movil"
          className=" min-h-screen flex flex-col items-center justify-center md:hidden"
        >
          <div className="text-center">
            <div>
              <span className="titulo-p text-4xl md:text-7xl text-amber-500">
                Hola
              </span>
            </div>
            <div>
              <span className="titulo-p text-4xl md:text-7xl">
                Soy Anthony Carhuayalle
              </span>
            </div>
            <p className="text400 text-2xl md:text-4xl mt-2">
              Developer Junior
            </p>
            <div className="flex items-center justify-center py-8">
              <Image
                src={fotoSinFondo}
                alt="Foto de perfil"
                width={200}
                height={200}
                objectFit="cover"
                className="rounded-full"
              />
            </div>
          </div>
          <div className="flex justify-center items-center md:flex mt-4 space-x-6">
            <div className="group">
              <div className="hover:bg-amber font-bold py-2 h-24 w-24 flex items-center justify-center bg-zinc-950 rounded-full">
                <div className="h-20 w-20 bg-transparent rounded-full flex items-center justify-center border-4 border-neutral-600 group-hover:border-amber-500"></div>
              </div>
              <span className="text-sm whitespace-nowrap group-hover:text-amber-500 block text-center">
                DESCARGAR CV
              </span>
            </div>

            <div className="group">
              <div className="hover:bg-amber font-bold py-2 h-24 w-24 flex items-center justify-center bg-zinc-950 rounded-full">
                <div className="h-20 w-20 bg-transparent rounded-full flex items-center justify-center border-4 border-neutral-600 group-hover:border-amber-500"></div>
              </div>
              <span className="text-sm whitespace-nowrap group-hover:text-amber-500 block text-center">
                CONTACTAME
              </span>
            </div>
          </div>
        </section>
      )}
      <section
        id="Proyectos"
        className=" min-h-screen flex items-center justify-center bg-neutral-800 bg-opacity-70"
      >
        <div className="container mx-auto p-4 transition-transform duration-300 transform hover:scale-105">
          <h2 className="text-4xl font-bold mb-4">Mis Proyectos</h2>
<Swiper/>
        
        </div>
      </section>

      {/* Otras secciones */}
      <section
        id="Sobremi"
        className="min-h-screen flex items-center justify-center"
      >
        <div className="container mx-auto p-4">
          <h2 className="text-4xl font-bold mb-4">Sobre mí</h2>
          <p className="text-xl">
            Soy un programador junior con habilidades en tecnologías como
            JavaScript, React.js, Express, Node.js, MySQL y Tailwind, adquiridas
            a través de cursos en línea y proyectos personales. Además, tengo
            experiencia como supervisor de transporte, coordinando flotas de
            vehículos y gestionando entregables.
          </p>
        </div>
      </section>


      <section
        id="Habilidades"
        className=" min-h-screen flex flex-col items-center justify-center bg-neutral-800 bg-opacity-70"
      >
        <div className="container mx-auto p-4">
          {/* Sección de habilidades para pantallas grandes */}
          <div className="hidden md:flex flex-col items-center p-4 rounded-lg w-full transition-transform duration-300 transform hover:scale-105">
            <div className="flex flex-col items-center">
              {/* Título */}
              <h2 className="text-4xl font-bold text-center md:text-left mb-10">
                👨‍💻 Mis Habilidades
              </h2>
              {/* Íconos */}
              <div className="flex flex-wrap justify-center md:justify-center gap-20">
                <div className="flex justify-center items-center text-white rounded-lg p-6 m-2 bg-neutral-900 bg-opacity-50 relative shadow-[0_0_15px_2px_white] transition-transform duration-300 transform hover:scale-105">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                    className="w-24 h-24"
                    alt="JavaScript"
                  />
                </div>

                <div className="flex justify-center items-center text-white rounded-lg p-6 m-2 bg-neutral-900 bg-opacity-50 relative shadow-[0_0_15px_2px_white] transition-transform duration-300 transform hover:scale-105">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                    className="w-24 h-24"
                    alt="HTML5"
                  />
                </div>
                <div className="flex justify-center items-center text-white rounded-lg p-6 m-2 bg-neutral-900 bg-opacity-50 relative shadow-[0_0_15px_2px_white] transition-transform duration-300 transform hover:scale-105">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                    className="w-24 h-24"
                    alt="CSS3"
                  />
                </div>
                <div className="flex justify-center items-center text-white rounded-lg p-6 m-2 bg-neutral-900 bg-opacity-50 relative shadow-[0_0_15px_2px_white] transition-transform duration-300 transform hover:scale-105">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
                    className="w-24 h-24"
                    alt="MySQL"
                  />
                </div>
                <div className="flex justify-center items-center text-white rounded-lg p-6 m-2 bg-neutral-900 bg-opacity-50 relative shadow-[0_0_15px_2px_white] transition-transform duration-300 transform hover:scale-105">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                    className="w-24 h-24"
                    alt="React"
                  />
                </div>
                <div className="flex justify-center items-center text-white rounded-lg p-6 m-2 bg-neutral-900 bg-opacity-50 relative shadow-[0_0_15px_2px_white] transition-transform duration-300 transform hover:scale-105">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-plain-wordmark.svg"
                    className="w-24 h-24"
                    alt="Tailwind CSS"
                  />
                </div>
                <div className="flex justify-center items-center text-white rounded-lg p-6 m-2 bg-neutral-900 bg-opacity-50 relative shadow-[0_0_15px_2px_white] transition-transform duration-300 transform hover:scale-105">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg"
                    className="w-24 h-24"
                    alt="Next.js"
                  />
                </div>
                <div className="flex justify-center items-center text-white rounded-lg p-6 m-2 bg-neutral-900 bg-opacity-50 relative shadow-[0_0_15px_2px_white] transition-transform duration-300 transform hover:scale-105">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
                    className="w-24 h-24"
                    alt="VSCode"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Sección de habilidades para pantallas móviles */}
          <div className="md:hidden flex flex-col items-center p-4 rounded-lg w-full transition-transform duration-300 transform hover:scale-105">
            <h2 className="text-4xl font-bold text-center mb-8">
              Mis Habilidades
            </h2>
            <div className="flex flex-wrap justify-center gap-1">
              {/* Repite los íconos aquí */}
              <div className="flex justify-center items-center text-white rounded-lg p-4 m-2 bg-neutral-900 bg-opacity-50 relative shadow-[0_0_15px_2px_white] transition-transform duration-300 transform hover:scale-105">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                  className="w-12 h-12"
                  alt="JavaScript"
                />
              </div>
              <div className="flex justify-center items-center text-white rounded-lg p-4 m-2 bg-neutral-900 bg-opacity-50 relative shadow-[0_0_15px_2px_white] transition-transform duration-300 transform hover:scale-105">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                  className="w-12 h-12"
                  alt="HTML5"
                />
              </div>
              <div className="flex justify-center items-center  text-white rounded-lg p-4 m-2 bg-neutral-900 bg-opacity-50 relative shadow-[0_0_15px_2px_white] transition-transform duration-300 transform hover:scale-105">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                  className="w-12 h-12"
                  alt="CSS3"
                />
              </div>
              <div className="flex justify-center items-center  text-white rounded-lg p-4 m-2 bg-neutral-900 bg-opacity-50 relative shadow-[0_0_15px_2px_white] transition-transform duration-300 transform hover:scale-105">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
                  className="w-12 h-12"
                  alt="MySQL"
                />
              </div>
              <div className="flex justify-center items-center  text-white rounded-lg p-4 m-2 bg-neutral-900 bg-opacity-50 relative shadow-[0_0_15px_2px_white] transition-transform duration-300 transform hover:scale-105">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                  className="w-12 h-12"
                  alt="React"
                />
              </div>
              <div className="flex justify-center items-center  text-white rounded-lg p-4 m-2 bg-neutral-900 bg-opacity-50 relative shadow-[0_0_15px_2px_white] transition-transform duration-300 transform hover:scale-105">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-plain-wordmark.svg"
                  className="w-12 h-12"
                  alt="Tailwind CSS"
                />
              </div>
              <div className="flex justify-center items-center  text-white rounded-lg p-4 m-2 bg-neutral-900 bg-opacity-50 relative shadow-[0_0_15px_2px_white] transition-transform duration-300 transform hover:scale-105">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg"
                  className="w-12 h-12"
                  alt="Next.js"
                />
              </div>
              <div className="flex justify-center items-center  text-white rounded-lg p-4 m-2 bg-neutral-900 bg-opacity-50 relative shadow-[0_0_15px_2px_white] transition-transform duration-300 transform hover:scale-105">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
                  className="w-12 h-12"
                  alt="VSCode"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="Sobremi"
        className="mx-4 md:mx-20 min-h-screen flex items-center justify-center"
      >
        <div className="container mx-auto p-4">
          <h2 className="text-4xl font-bold mb-4">Con</h2>
          <p className="text-xl">
            Soy un programador junior con habilidades en tecnologías como
            JavaScript, React.js, Express, Node.js, MySQL y Tailwind, adquiridas
            a través de cursos en línea y proyectos personales. Además, tengo
            experiencia como supervisor de transporte, coordinando flotas de
            vehículos y gestionando entregables.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
