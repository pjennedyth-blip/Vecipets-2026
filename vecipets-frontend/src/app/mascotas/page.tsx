"use client";

import { useEffect, useMemo, useState } from "react";

import MascotaCard from "./components/mascota-card";
import MascotaDetalle from "./components/mascota-detalle";
import MascotaFilters from "./components/mascota-filters";

import type { Mascota } from "./types/mascota";

type ReporteBackend = {
  id: string;
  tipo: string;
  estado: string;
  titulo: string;
  descripcion: string;
  fechaAcontecimiento: string;
  ubicacion?: {
    direccion?: string;
    comuna?: string;
    barrio?: string;
    latitud?: number;
    longitud?: number;
  };
};

type MascotaBackend = {
  id: string;
  nombre: string;
  especie: string;
  raza: string;
  edadAprox?: number;
  color: string;
  caracteristicas?: string;
  fotoUrl?: string;
  reportes?: ReporteBackend[];
};

export default function MascotasPage() {
  const [mascotas, setMascotas] = useState<Mascota[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [tipo, setTipo] = useState("todos");
  const [especie, setEspecie] = useState("todas");

  const [seleccionada, setSeleccionada] =
    useState<Mascota | null>(null);

  useEffect(() => {
    async function cargarMascotas() {
      try {
        setLoading(true);
        setError("");

        const token = localStorage.getItem("accessToken");

        if (!token) {
          setError(
            "No has iniciado sesión. Inicia sesión para ver los reportes."
          );
          return;
        }

        const response = await fetch(
          "http://localhost:4000/api/v1/mascotas/reportadas",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 401) {
          localStorage.removeItem("accessToken");

          setError(
            "Tu sesión ha expirado. Inicia sesión nuevamente."
          );

          return;
        }

        if (!response.ok) {
          const mensaje = await response.text();

          throw new Error(
            mensaje || "No se pudieron cargar las mascotas."
          );
        }

        const data: MascotaBackend[] =
          await response.json();

        const mascotasConvertidas: Mascota[] =
          data.map((mascota) => {
            const reporte = mascota.reportes?.[0];
            const ubicacion = reporte?.ubicacion;

            return {
              id: Number(mascota.id) || 0,

              tipo:
                reporte?.tipo === "HALLAZGO"
                  ? "encontrada"
                  : "perdida",

              nombre:
                mascota.nombre || "Sin nombre",

              especie:
                mascota.especie === "GATO"
                  ? "Gato"
                  : mascota.especie === "PERRO"
                    ? "Perro"
                    : "Otro",

              raza:
                mascota.raza || "Sin especificar",

              color:
                mascota.color || "Sin especificar",

              tamaño: "Mediano",

              sexo: "Desconocido",

              fecha: reporte?.fechaAcontecimiento
                ? new Date(
                    reporte.fechaAcontecimiento
                  ).toLocaleDateString("es-CO")
                : "",

              sector:
                ubicacion?.barrio ||
                ubicacion?.comuna ||
                "Sin ubicación",

              ciudad:
                ubicacion?.direccion ||
                "Medellín",

              descripcion:
                reporte?.descripcion ||
                mascota.caracteristicas ||
                "Sin descripción",

              imagen:
                mascota.fotoUrl || undefined,
            };
          });

        setMascotas(mascotasConvertidas);
      } catch (err) {
        console.error(err);

        setError(
          "No fue posible conectar con el servidor."
        );
      } finally {
        setLoading(false);
      }
    }

    cargarMascotas();
  }, []);

  const mascotasFiltradas = useMemo(() => {
    const texto = search.trim().toLowerCase();

    return mascotas.filter((mascota) => {
      const coincideBusqueda =
        texto === "" ||
        mascota.nombre.toLowerCase().includes(texto) ||
        mascota.raza.toLowerCase().includes(texto) ||
        mascota.sector.toLowerCase().includes(texto);

      const coincideTipo =
        tipo === "todos" ||
        mascota.tipo === tipo;

      const coincideEspecie =
        especie === "todas" ||
        mascota.especie === especie;

      return (
        coincideBusqueda &&
        coincideTipo &&
        coincideEspecie
      );
    });
  }, [mascotas, search, tipo, especie]);

  function limpiarFiltros() {
    setSearch("");
    setTipo("todos");
    setEspecie("todas");
  }

  if (loading) {
    return (
      <main className="mascotas-page">
        <div className="loading">
          Cargando mascotas...
        </div>
      </main>
    );
  }

  return (
    <main className="mascotas-page">

      <section className="hero-mascotas">
        <div>
          <span className="eyebrow">
            DIRECTORIO DE CASOS
          </span>

          <h1>
            Mascotas Reportadas
          </h1>

          <p>
            Explora los reportes de mascotas perdidas
            y encontradas para facilitar su búsqueda
            y recuperación.
          </p>
        </div>

        <div className="hero-actions">

          <button
            type="button"
            className="btn-mapa"
          >
            🗺️ Ver en Mapa
          </button>

          <a
            href="/mascotas/registrar"
            className="btn-publicar"
          >
            ＋ Publicar Reporte
          </a>

        </div>
      </section>

      {error ? (
        <div className="error-mensaje">
          {error}
        </div>
      ) : (
        <>
          <MascotaFilters
            search={search}
            tipo={tipo}
            especie={especie}
            onSearchChange={setSearch}
            onTipoChange={setTipo}
            onEspecieChange={setEspecie}
          />

          <div className="resultados">
            Mostrando{" "}
            <strong>
              {mascotasFiltradas.length}
            </strong>{" "}
            reporte(s)
          </div>

          {mascotasFiltradas.length === 0 ? (
            <div className="sin-resultados">
              <div className="huellas">
                🐾
              </div>

              <h2>
                No se encontraron reportes
              </h2>

              <p>
                No hay casos que coincidan con
                los filtros seleccionados.
              </p>

              <button
                type="button"
                onClick={limpiarFiltros}
              >
                Restablecer Filtros
              </button>
            </div>
          ) : (
            <section className="mascotas-grid">
              {mascotasFiltradas.map((mascota) => (
                <MascotaCard
                  key={mascota.id}
                  mascota={mascota}
                  onClick={() =>
                    setSeleccionada(mascota)
                  }
                />
              ))}
            </section>
          )}

          {seleccionada && (
            <MascotaDetalle
              mascota={seleccionada}
              onClose={() =>
                setSeleccionada(null)
              }
            />
          )}
        </>
      )}
    </main>
  );
}