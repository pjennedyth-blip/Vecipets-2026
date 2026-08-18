import React from 'react';
import Link from 'next/link';

export default function MapAndSupportPlaces() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Mapa demostrativo */}
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
        <h3 className="font-bold text-lg text-[#2E7D5B]">Información geolocalizada</h3>
        <div className="rounded-xl overflow-hidden h-40 border border-slate-200">
          <iframe
            title="Mapa demostrativo"
            src="https://maps.google.com/maps?q=medellin&t=&z=12&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
        <p className="text-xs text-[#6B7280]">
          VeciPets utiliza geolocalización para facilitar la búsqueda de mascotas y lugares de apoyo cercanos.
        </p>
        <div className="flex items-center gap-3 pt-1">
          <Link href="/mapa" className="bg-[#2E7D5B] text-white px-5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 hover:bg-[#4CAF78] transition">
            <span>🗺️</span> Explorar mapa
          </Link>
          <span className="text-xs font-mono text-slate-400">/mapa</span>
        </div>
      </div>

      {/* Lugares de Apoyo clicables */}
      <div className="space-y-4">
        <h3 className="font-bold text-lg text-[#2E7D5B]">Lugares de apoyo</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Botón / Link Refugios */}
          <Link 
            href="/mapa?categoria=refugios" 
            className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-center space-y-2 hover:shadow-md hover:border-[#2E7D5B]/40 hover:-translate-y-1 transition-all duration-200 block group"
          >
            <div className="w-10 h-10 bg-emerald-100 text-[#2E7D5B] rounded-full flex items-center justify-center mx-auto text-lg font-bold group-hover:scale-110 transition-transform">
              🏠
            </div>
            <h4 className="font-bold text-sm text-[#1F2937] group-hover:text-[#2E7D5B] transition-colors">
              Refugios
            </h4>
            <p className="text-[11px] text-[#6B7280]">Encuentra refugios y albergues para mascotas.</p>
          </Link>

          {/* Botón / Link Veterinarias */}
          <Link 
            href="/mapa?categoria=veterinarias" 
            className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-center space-y-2 hover:shadow-md hover:border-[#2E7D5B]/40 hover:-translate-y-1 transition-all duration-200 block group"
          >
            <div className="w-10 h-10 bg-emerald-100 text-[#2E7D5B] rounded-full flex items-center justify-center mx-auto text-lg font-bold group-hover:scale-110 transition-transform">
              ➕
            </div>
            <h4 className="font-bold text-sm text-[#1F2937] group-hover:text-[#2E7D5B] transition-colors">
              Veterinarias
            </h4>
            <p className="text-[11px] text-[#6B7280]">Consulte veterinarias cercanas y servicios disponibles.</p>
          </Link>

        </div>
      </div>
    </section>
  );
}