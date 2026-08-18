// src/app/dashboard/mascotas-perdidas/page.tsx

export default function MascotasPerdidasPage() {
  const lineasEmergencia = [
    { nombre: "Línea de Emergencias", numero: "123", desc: "Policía Nacional / Ambiental" },
    { nombre: "Soporte Vecipets", numero: "+57 300 000 0000", desc: "Reporte directo en plataforma" },
    { nombre: "Protección Animal", numero: "01 8000 XXXXX", desc: "Centro de Bienestar Animal" },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      {/* Encabezado */}
      <section className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-gray-800">¿Se perdió tu mascota?</h1>
        <p className="text-gray-600">
          Sigue estos pasos e infórmate sobre los números de contacto inmediatos.
        </p>
      </section>

      {/* Pasos a seguir */}
      <section className="bg-white p-6 rounded-xl shadow-md space-y-4">
        <h2 className="text-xl font-semibold text-primary">Pasos recomendados</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Crea la alerta en Vecipets:</strong> Llena el formulario con foto reciente y lugar del extravío.</li>
          <li><strong>Busca en el perímetro cercano:</strong> Realiza un recorrido por las manzanas aledañas.</li>
          <li><strong>Difunde en redes sociales:</strong> Comparte el enlace del reporte con vecinos y grupos del barrio.</li>
        </ul>
      </section>

      {/* Directorio de números de emergencia */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Líneas de Atención y Contacto</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {lineasEmergencia.map((item, index) => (
            <div key={index} className="border p-4 rounded-lg bg-gray-50 shadow-sm space-y-2">
              <h3 className="font-bold text-lg text-gray-900">{item.nombre}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
              <a 
                href={`tel:${item.numero}`} 
                className="inline-block text-blue-600 font-semibold hover:underline"
              >
                📞 {item.numero}
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}