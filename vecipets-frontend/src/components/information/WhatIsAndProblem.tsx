import React from 'react';

export default function WhatIsAndProblem() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
        <div className="bg-[#2E7D5B] text-white p-3 rounded-full text-2xl flex-shrink-0">
          🐾
        </div>
        <div className="space-y-2">
          <h3 className="font-bold text-lg text-[#1F2937]">¿Qué es VeciPets?</h3>
          <p className="text-xs text-[#6B7280] leading-relaxed">
            VeciPets es una plataforma web orientada a facilitar la búsqueda, gestión y recuperación de mascotas perdidas y encontradas.
          </p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
        <div className="bg-[#2E7D5B] text-white p-3 rounded-full text-2xl flex-shrink-0">
          💡
        </div>
        <div className="space-y-2">
          <h3 className="font-bold text-lg text-[#1F2937]">¿Qué problema buscamos solucionar?</h3>
          <p className="text-xs text-[#6B7280] leading-relaxed">
            Cuando una mascota se pierde, la información suele estar dispersa. Centralizamos reportes y geolocalización en un solo lugar.
          </p>
        </div>
      </div>
    </section>
  );
}