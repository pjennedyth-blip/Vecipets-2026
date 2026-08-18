import React from 'react';
import Link from 'next/link';

export default function FeaturesSection() {
  const cards = [
    { 
      icono: '🐶', 
      bg: 'bg-emerald-50 text-emerald-600', 
      titulo: 'Registrar mascotas', 
      texto: 'Mantén los datos organizados.',
      ruta: '/dashboard/registro-mascota' // Ajusta esta ruta a la de tu compañero/a
    },
    { 
      icono: '🚨', 
      bg: 'bg-red-50 text-red-500', 
      titulo: 'Reportar mascotas', 
      texto: 'Perdida o encontrada.',
      ruta: '/reportar' 
    },
    { 
      icono: '🗺️', 
      bg: 'bg-blue-50 text-blue-600', 
      titulo: 'Consultar mapa', 
      texto: 'Visualiza mediante información geográfica.',
      ruta: '/mapa' 
    },
    { 
      icono: '🔍', 
      bg: 'bg-purple-50 text-purple-600', 
      titulo: 'Buscar reportes', 
      texto: 'Filtra para facilitar la búsqueda.',
      ruta: '/dashboard/buscar' // Ajusta esta ruta a la de tu compañero/a
    },
  ];

  return (
    <section className="space-y-6 text-center">
      <h2 className="text-2xl font-bold text-[#1F2937]">
        ¿Qué puedes hacer en <span className="text-[#2E7D5B]">VeciPets</span>?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
        {cards.map((card, idx) => (
          <Link 
            key={idx} 
            href={card.ruta}
            className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm space-y-3 hover:shadow-md hover:border-[#2E7D5B]/30 hover:-translate-y-1 transition-all duration-200 cursor-pointer block group"
          >
            <div className={`w-12 h-12 ${card.bg} rounded-full flex items-center justify-center text-xl font-bold group-hover:scale-105 transition-transform`}>
              {card.icono}
            </div>
            <h4 className="font-bold text-sm text-[#1F2937] group-hover:text-[#2E7D5B] transition-colors">
              {card.titulo}
            </h4>
            <p className="text-xs text-[#6B7280]">{card.texto}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}