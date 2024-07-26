// components/Navbar.js
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faProjectDiagram,
  faTools,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false); // Inicializa el estado en false solo en el cliente
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="fixed top-0 w-full bg-neutral-800 bg-opacity-80 backdrop-blur-md shadow-md border-b border-gray-700 px-4 sm:px-6 hidden sm:block">
        <div className="flex justify-between">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="font-bold text-4xl text-amber-500">
                MI PORTAFOLIO
              </span>
            </div>
          </div>
          <nav className="hidden md:flex md:space-x-2 h-16 md:ml-auto py-4">
            <Link
              href="#Inicio"
              className="text-balance text-white shadow-lg hover:text-red-600 px-3 py-2 rounded-md font-medium"
            >
              Inicio
            </Link>
            <Link
              href="#Sobremi"
              className="text-white hover:text-red-600 px-3 py-2 rounded-md text-balance font-medium"
            >
              Perfil
            </Link>
            <Link
              href="#Proyectos"
              className="text-white hover:text-red-600 px-3 py-2 rounded-md text-balance font-medium"
            >
              Proyectos
            </Link>
            <Link
              href="#Habilidades"
              className="text-white hover:text-red-600 px-3 py-2 rounded-md text-balance font-medium"
            >
              Habilidades
            </Link>
            <Link
              href="/Contacto"
              className="text-white hover:text-red-600 px-3 py-2 rounded-md text-balance font-medium"
            >
              Contacto
            </Link>
          </nav>
        </div>
      </div>

      <div className="fixed bottom-0 w-full  md:hidden ">
        <div className="bg-neutral-900 w-full max-w-md h-14 rounded-t-lg flex justify-around items-start">
          <a
            href="#"
            className="mx-2 text-sm border-t-4 py-2 flex flex-col items-center"
          >
            <FontAwesomeIcon icon={faHome} className="mb-1" />
            <span>Inicio</span>
          </a>
          <a
            href="#Sobremi"
            className="mx-2 text-sm border-t-4 py-2 flex flex-col items-center"
          >
            <FontAwesomeIcon icon={faUser} className="mb-1" />
            <span>Perfil</span>
          </a>
          <a
            href="#Proyectos"
            className="mx-2 text-sm flex border-t-4 py-2 flex flex-col items-center"
          >
            <FontAwesomeIcon icon={faProjectDiagram} className="mb-1" />
            <span>Proyectos</span>
          </a>
          <a
            href="#Habilidades"
            className="mx-2 text-sm flex border-t-4 py-2 flex flex-col items-center"
          >
            <FontAwesomeIcon icon={faTools} className="mb-1" />
            <span>Habilidades</span>
          </a>
          <a
            href="#"
            className="mx-2 text-sm flex border-t-4 py-2 flex flex-col items-center"
          >
            <FontAwesomeIcon icon={faEnvelope} className="mb-1" />
            <span>Contacto</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
