'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('vecipets_user');
    if (!storedUser) {
      router.push('/login');
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('vecipets_access_token');
    localStorage.removeItem('vecipets_user');
    router.push('/login');
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-slate-100">
      <nav className="bg-white shadow border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <span className="text-xl font-bold text-emerald-600">VeciPets</span>
            <div className="flex items-center gap-4">
              <span className="text-sm text-slate-700 font-medium">Hola, {user.nombreCompleto || user.email}</span>
              <button
                onClick={handleLogout}
                className="text-sm bg-red-50 text-red-600 px-3 py-1.5 rounded hover:bg-red-100 transition font-medium"
              >
                Cerrar Sesión
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Panel del Ciudadano</h1>
          <p className="text-slate-600 mb-6">
            Bienvenido al sistema integrador de gestión de mascotas en Medellín.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-emerald-100 bg-emerald-50/50 p-5 rounded-lg">
              <h3 className="font-semibold text-emerald-900 text-lg mb-1">Mis Mascotas</h3>
              <p className="text-emerald-700 text-sm">Registra y administra las fichas de tus mascotas.</p>
            </div>

            <div className="border border-blue-100 bg-blue-50/50 p-5 rounded-lg">
              <h3 className="font-semibold text-blue-900 text-lg mb-1">Crear Reporte</h3>
              <p className="text-blue-700 text-sm">Reporta mascotas perdidas o encontradas en tu comuna.</p>
            </div>

            <div className="border border-purple-100 bg-purple-50/50 p-5 rounded-lg">
              <h3 className="font-semibold text-purple-900 text-lg mb-1">Mapa Interactivo</h3>
              <p className="text-purple-700 text-sm">Visualiza reportes geolocalizados en Medellín.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}