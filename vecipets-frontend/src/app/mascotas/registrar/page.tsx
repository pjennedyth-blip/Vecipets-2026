import Link from "next/link";
import MascotaForm from "../components/mascota-form";

export default function RegistrarMascotaPage() {
  return (
    <main className="registrar-page">

      <Link
        href="/mascotas"
        className="volver-inicio"
      >
        ← Volver al inicio
      </Link>

      <div className="registrar-header">

        <h1>
          Registrar Mascota
        </h1>

        <p>
          Completa la información para que la comunidad
          y los refugios puedan ayudarte en la búsqueda.
        </p>

      </div>

      <MascotaForm />

    </main>
  );
}