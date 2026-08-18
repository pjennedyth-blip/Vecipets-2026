"use client";

import { Mascota } from "../types/mascota";

type Props = {
  mascota: Mascota;
  onClose: () => void;
};

export default function MascotaDetalle({
  mascota,
  onClose,
}: Props) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-mascota"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
        >
          ×
        </button>

        <div className="detalle-imagen">
          {mascota.imagen ? (
            <img
              src={mascota.imagen}
              alt={mascota.nombre}
            />
          ) : (
            <div className="mascota-placeholder grande">
              🐾
            </div>
          )}
        </div>

        <span
          className={`estado-badge ${
            mascota.tipo === "perdida"
              ? "estado-perdida"
              : "estado-encontrada"
          }`}
        >
          {mascota.tipo === "perdida"
            ? "Mascota perdida"
            : "Mascota encontrada"}
        </span>

        <h2>
          {mascota.nombre || "Mascota sin nombre"}
        </h2>

        <div className="detalle-grid">
          <div>
            <small>Especie</small>
            <strong>{mascota.especie}</strong>
          </div>

          <div>
            <small>Raza</small>
            <strong>{mascota.raza}</strong>
          </div>

          <div>
            <small>Color</small>
            <strong>{mascota.color}</strong>
          </div>

          <div>
            <small>Tamaño</small>
            <strong>{mascota.tamaño}</strong>
          </div>

          <div>
            <small>Sexo</small>
            <strong>{mascota.sexo}</strong>
          </div>

          <div>
            <small>Fecha</small>
            <strong>{mascota.fecha}</strong>
          </div>
        </div>

        <div className="detalle-ubicacion">
          <small>Ubicación</small>

          <p>
            {mascota.sector}, {mascota.ciudad}
          </p>
        </div>

        <div className="detalle-descripcion">
          <small>Descripción</small>

          <p>{mascota.descripcion}</p>
        </div>
      </div>
    </div>
  );
}