import React from 'react';
import Link from 'next/link';

// Rutas relativas corregidas según tu estructura de carpetas
import InformationHero from '../../components/information/InformationHero';
import WhatIsAndProblem from '../../components/information/WhatIsAndProblem';
import FeaturesSection from '../../components/information/FeaturesSection';
import HowItWorks from '../../components/information/HowItWorks';
import MapAndSupportPlaces from '../../components/information/MapAndSupportPlaces';
import PurposeBannerAndCTA from '../../components/information/PurposeBannerAndCTA';

export default function InformacionPage() {
  return (
    <div className="min-h-screen bg-[#F8FAF9] text-[#1F2937] font-sans pb-12">
      
      {/* NAVBAR OFICIAL DE VECIPETS */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-extrabold text-2xl text-[#2E7D5B]">
            <span>🐾</span> VeciPets
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-[#6B7280]">
            <Link href="/" className="hover:text-[#2E7D5B]">Inicio</Link>
            <Link href="/informacion" className="bg-[#2E7D5B] text-white px-4 py-2 rounded-full font-bold">INFORMACIÓN</Link>
            <Link href="/mapa" className="hover:text-[#2E7D5B]">Mapa</Link>
            <Link href="/reportar" className="hover:text-[#2E7D5B]">Reportar</Link>
          </nav>
          <Link href="/login" className="border border-slate-300 px-4 py-1.5 rounded-full text-sm font-semibold text-[#1F2937] hover:bg-slate-50 flex items-center gap-1.5">
            <span>👤</span> Iniciar sesión
          </Link>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL MODULARIZADO */}
      <main className="max-w-5xl mx-auto px-4 space-y-10 pt-8">
        <InformationHero />
        <WhatIsAndProblem />
        <FeaturesSection />
        <HowItWorks />
        <MapAndSupportPlaces />
        <PurposeBannerAndCTA />
      </main>

      {/* FOOTER OFICIAL */}
      <footer className="bg-[#1B4D3E] text-white mt-16 py-8">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-xs">
          <div className="space-y-2 max-w-xs text-center md:text-left">
            <div className="font-bold text-lg flex items-center justify-center md:justify-start gap-1">
              <span>🐾</span> VeciPets
            </div>
            <p className="text-white/70">
              Una plataforma para facilitar la búsqueda y recuperación de mascotas perdidas y encontradas.
            </p>
          </div>
          <div className="flex gap-6 font-semibold text-white/90">
            <Link href="/">Inicio</Link>
            <Link href="/informacion">Información</Link>
            <Link href="/mapa">Mapa</Link>
            <Link href="/reportar">Reportar</Link>
            <Link href="/login">Iniciar sesión</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}