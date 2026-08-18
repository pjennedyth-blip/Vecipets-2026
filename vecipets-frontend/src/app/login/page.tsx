"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setError("");

    // Validación del frontend
    if (!email.trim()) {
      setError("Ingresa tu correo electrónico.");
      return;
    }

    if (!password) {
      setError("Ingresa tu contraseña.");
      return;
    }

    setLoading(true);

    try {
      // IMPORTANTE:
      // Los nombres deben ser exactamente email y password
      const body = {
        email: email.trim(),
        password: password,
      };

      console.log("Datos enviados al backend:", {
        email: body.email,
        password: "********",
      });

      const response = await fetch(
        "http://localhost:4000/api/v1/auth/login",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },

          body: JSON.stringify(body),
        }
      );

      const data = await response.json();

      console.log(
        "Respuesta del backend:",
        data
      );

      if (!response.ok) {
        if (Array.isArray(data.message)) {
          throw new Error(
            data.message.join(" ")
          );
        }

        throw new Error(
          data.message ||
            "No se pudo iniciar sesión."
        );
      }

      if (!data.accessToken) {
        throw new Error(
          "El backend no devolvió un accessToken."
        );
      }

      // Guardar JWT
      localStorage.setItem(
        "accessToken",
        data.accessToken
      );

      // Guardar usuario
      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      console.log(
        "✅ Login exitoso"
      );

      // Redireccionar
      router.push("/mascotas");

    } catch (error) {
      console.error(
        "❌ Error en login:",
        error
      );

      setError(
        error instanceof Error
          ? error.message
          : "Error al iniciar sesión."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="login-page">

      <section className="login-card">

        <div className="login-header">

          <div className="login-icon">
            🐾
          </div>

          <h1>
            Iniciar sesión
          </h1>

          <p>
            Ingresa a tu cuenta de VeciPets
          </p>

        </div>

        <form
          onSubmit={handleLogin}
          className="login-form"
        >

          {/* CORREO */}
          <div className="form-group">

            <label htmlFor="email">
              Correo electrónico
            </label>

            <input
              id="email"
              name="email"
              type="email"
              value={email}
              placeholder="ejemplo@correo.com"
              onChange={(event) =>
                setEmail(event.target.value)
              }
              autoComplete="email"
              required
            />

          </div>

          {/* CONTRASEÑA */}
          <div className="form-group">

            <label htmlFor="password">
              Contraseña
            </label>

            <input
              id="password"
              name="password"
              type="password"
              value={password}
              placeholder="Ingresa tu contraseña"
              onChange={(event) =>
                setPassword(event.target.value)
              }
              autoComplete="current-password"
              required
            />

          </div>

          {/* ERROR */}
          {error && (
            <div className="login-error">
              {error}
            </div>
          )}

          {/* BOTÓN */}
          <button
            type="submit"
            className="login-button"
            disabled={loading}
          >
            {loading
              ? "Iniciando sesión..."
              : "Iniciar sesión"}
          </button>

        </form>

        <div className="login-footer">

          <p>
            ¿No tienes una cuenta?
          </p>

          <Link href="/registro">
            Crear una cuenta
          </Link>

        </div>

      </section>

    </main>
  );
}