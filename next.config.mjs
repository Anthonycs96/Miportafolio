/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
  images: {
    unoptimized: true, // Para evitar advertencias de imagen, aunque es recomendable usar `next/image` para optimización
  },
};

export default nextConfig;
