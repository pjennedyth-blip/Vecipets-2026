import React from 'react';

export default function SocialFloating() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Botón de Instagram */}
      <a
        href="https://instagram.com/vecipets"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 text-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-200"
        title="Síguenos en Instagram"
      >
        <span className="text-xl">📸</span>
      </a>

      {/* Botón de WhatsApp */}
      <a
        href="https://wa.me/573000000000?text=Hola,%20necesito%20ayuda%20con%20una%20mascota%20perdida"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full shadow-2xl hover:scale-110 hover:bg-green-600 transition-transform duration-200"
        title="Escríbenos a WhatsApp"
      >
        <span className="text-xl">💬</span>
      </a>
    </div>
  );
}