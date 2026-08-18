import React from 'react';

export default function HowItWorks() {
  const pasos = [
    { num: '01', color: 'bg-[#2E7D5B]', titulo: 'REGISTRA', desc: 'Crea tu cuenta y tu mascota.' },
    { num: '02', color: 'bg-red-500', titulo: 'REPORTA', desc: 'Publica si se pierde/encuentra.' },
    { num: '03', color: 'bg-[#3B82F6]', titulo: 'BUSCA', desc: 'Consulta los reportes en mapa.' },
    { num: '04', color: 'bg-[#2E7D5B]', titulo: 'RECUPERA', desc: 'Facilita el reencuentro.' },
  ];

  return (
    <section className="space-y-6 text-center">
      <h2 className="text-2xl font-bold text-[#1F2937]">
        ¿Cómo funciona <span className="text-[#2E7D5B]">VeciPets</span>?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-left">
        {pasos.map((paso, idx) => (
          <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm space-y-2">
            <div className="flex items-center gap-2">
              <span className={`${paso.color} text-white text-xs font-bold px-2 py-0.5 rounded-md`}>
                {paso.num}
              </span>
              <span className="font-bold text-xs uppercase text-[#1F2937]">{paso.titulo}</span>
            </div>
            <p className="text-xs text-[#6B7280]">{paso.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}