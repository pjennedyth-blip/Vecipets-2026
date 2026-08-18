import React from 'react';
import Link from 'next/link';

export default function PurposeBannerAndCTA() {
  return (
    <div className="space-y-8">
      {/* Banner Propósito */}
      <section className="bg-[#2E7D5B] text-white p-6 md:p-8 rounded-2xl shadow-sm flex items-center gap-6">
        <div className="text-4xl bg-white/10 p-4 rounded-2xl flex-shrink-0">
          🤝
        </div>
        <div className="space-y-1">
          <h3 className="font-bold text-xl">Una herramienta para ayudar</h3>
          <p className="text-xs text-white/90 leading-relaxed">
            VeciPets busca facilitar la organización y consulta apoyándose en la tecnología.
          </p>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <img 
            src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=150&q=80" 
            alt="Perro feliz" 
            className="w-16 h-16 rounded-full object-cover shadow"
          />
          <div className="space-y-1">
            <h3 className="font-bold text-base text-[#1F2937]">¿Perdiste o encontraste una mascota?</h3>
            <p className="text-xs text-[#6B7280]">Registra un reporte y ayuda a facilitar su búsqueda.</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/reportar" className="bg-[#2E7D5B] text-white px-6 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 hover:bg-[#4CAF78] transition">
            <span>📋</span> Reportar mascota
          </Link>
          <span className="text-xs font-mono text-slate-400">/reportar</span>
        </div>
      </section>
    </div>
  );
}