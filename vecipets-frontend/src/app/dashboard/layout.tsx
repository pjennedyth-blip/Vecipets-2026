import React from 'react';
import SocialFloating from './components/SocialFloating';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen relative bg-slate-50">
      {/* Contenido de las páginas */}
      {children}

      {/* Botones Flotantes visibles en todo el Dashboard */}
      <SocialFloating />
    </div>
  );
}