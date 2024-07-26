"use client";
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Transition() {
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 2000); // Duración de la transición en milisegundos

    return () => clearTimeout(timer);
  }, []);

  // No renderizar nada en el servidor
  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-gray-950 via-gray-800 via-red-900 via-purple-500 to-gray-950"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="text-white text-2xl font-bold"
          >
            Bienvenido a Mi Portafolio
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
