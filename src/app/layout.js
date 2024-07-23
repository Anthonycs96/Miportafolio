"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Transition from './components/Transition';
import { useEffect, useState } from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <html lang="en">
      <title>Mi Portafolio</title>
      <body className={` bg-gradient-to-b from-gray-950 via-gray-800 via-red-900 via-purple-500 to-gray-950 ${inter.className}`}>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"></link>
       
        {isMounted && <Transition />}
        
        {children}  
      </body>
      
    </html>
  );
}
