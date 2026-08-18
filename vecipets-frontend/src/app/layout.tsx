import type { Metadata } from "next";
import "./globals.css";
// Importas el componente que acabas de crear
import FloatingButtons from "@/components/navigation/FloatingButtons"; // O la ruta donde lo hayas guardado (p. ej. '../../components/navigation/FloatingButtons')

export const metadata: Metadata = {
  title: "VeciPets",
  description: "Plataforma para el reporte y gestión de mascotas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}

        {/* 🚀 BOTONES FLOTANTES VISIBLES EN TODAS LAS RUTAS DE LA PÁGINA */}
        <FloatingButtons />
      </body>
    </html>
  );
}