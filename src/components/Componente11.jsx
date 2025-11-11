// src/components/Inversion.js
import React from "react";
import { CheckCircle, Hamburger } from "lucide-react";

export default function Componente11() {
  const beneficios = [
    "WORKSHOP EN VIVO ($497)",
    "PACK DE AGENTES IA LISTOS ($297)",
    "SOPORTE PREMIUM ($297)",
    "WORKBOOK PRÁCTICO ($97)",
    "10 OFERTAS VÁLIDAS ($197)",
    "CERTIFICADO DE PARTICIPACIÓN (INCLASIFICABLE 😄)",
  ];

  // Función para separar el texto y el precio entre paréntesis
  const separarTexto = (texto) => {
    const match = texto.match(/(.*?)(\([^)]*\))/);
    if (match) {
      return {
        titulo: match[1].trim(),
        precio: match[2],
      };
    }
    return { titulo: texto, precio: "" };
  };

  return (
    <section className="bg-gradient-to-b from-sky-400 to-blue-600 py-12 px-6 md:px-12 rounded-t-3xl mt-10 ">
      <div className="max-w-lg mx-auto text-center text-white">
        {/* Título */}
        <div className="bg-white text-gray-800 inline-block px-6 py-2 rounded-full font-medium mb-4">
          Tu inversión hoy:
        </div>

        <h3 className="text-2xl font-semibold mb-2">Un Solo Pago de:</h3>
        <h1 className="text-6xl md:text-7xl font-extrabold mb-6">US$10</h1>

        {/* Texto de comparación */}
        <div className="flex items-center justify-center bg-blue-700 text-sm font-medium px-4 py-2 rounded-md mb-6 w-fit mx-auto">
          <Hamburger className="w-4 h-4 mr-2 text-yellow-300" />
          Menos que el costo de una hamburguesa 🍔
        </div>

        {/* Lista de beneficios */}
        <ul className="text-left text-white/90 text-sm space-y-2 mb-8">
          {beneficios.map((b, i) => {
            const { titulo, precio } = separarTexto(b);
            return (
              <li
                key={i}
                className="flex items-center justify-center md:justify-start gap-2"
              >
                <CheckCircle className="w-4 h-4 text-green-300 flex-shrink-0" />
                <span className="font-medium">
                  {titulo}{" "}
                  <span className="line-through text-red-200">{precio}</span>
                </span>
              </li>
            );
          })}
        </ul>

        {/* Botón */}
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold text-sm md:text-base px-6 py-3 rounded-full transition shadow-md mb-8">
          QUIERO SER EL PRÓXIMO CASO DE ÉXITO 🚀
        </button>

        {/* Barra de progreso */}
        <div className="text-sm font-semibold text-white mb-2">
          89% del lote 5 <span className="text-red-400 font-bold">AGOTADO</span>
        </div>
        <div className="w-full bg-white/30 rounded-full h-5 overflow-hidden">
          <div
            className="bg-red-500 h-5 rounded-full text-[10px] text-white text-center leading-5"
            style={{ width: "89%" }}
          >
            89%
          </div>
        </div>
      </div>
    </section>
  );
}
