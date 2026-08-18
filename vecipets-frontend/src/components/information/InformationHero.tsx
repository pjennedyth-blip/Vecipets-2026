import React from 'react';

export default function InformationHero() {
  return (
    <section className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="space-y-4 max-w-lg">
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#1F2937] leading-tight">
          Conoce <span className="text-[#2E7D5B]">VeciPets</span>
        </h1>
        <p className="text-[#6B7280] text-base leading-relaxed">
          Una plataforma para facilitar la búsqueda y recuperación de mascotas perdidas y encontradas.
        </p>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <img 
          src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&q=80" 
          alt="Mascotas VeciPets" 
          className="rounded-3xl object-cover h-64 w-full shadow-md"
        />
      </div>
    </section>
  );
}