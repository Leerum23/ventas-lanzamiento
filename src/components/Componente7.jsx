// src/components/DiaUno.js
import React from "react";
import { CalendarDays } from "lucide-react";

export default function Componente7() {
  const items = [
    {
      title: "Identifica tu nicho usando IA",
    },
    {
      title: "Crea tu oferta magnética con agentes entrenados",
    },
    {
      title: "Valida tu propuesta de valor en tiempo real",
    },
    {
      title: "Define tu cliente ideal con precisión",
    },
  ];

  const items2 = [
    {
      title: "Genera el contenido del producto agentes IA",
    },
    {
      title: "Estructura tu producto paso a paso",
    },
    {
      title: "Crea materiales visuales con IA",
    },
    {
      title: "Optimiza todo para máxima conversión",
    },
  ];

   const items3 = [
    {
      title: "Construye página de venta que convierte",
    },
    {
      title: "Configura checkout optimizado",
    },
    {
      title: "Implementa sistema de entrega automatizado",
    },
    {
      title: "Prepara Order Bump y upsells",
    },
  ];

   const items4 = [
    {
      title: "Crea anuncios que generan ventas",
    },
    {
      title: "Diseña creativos visuales con IA",
    },
    {
      title: "Configura campañas publicitarias en Instagram",
    },
    {
      title: "Lanzas oficialmente tu producto",
    },
  ];

  return (
    <section className="bg-gray-50 py-10 px-6 md:px-12 rounded-2xl shadow-sm">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-gray-800 font-semibold text-lg mb-2 uppercase">
          ¿Qué sucede exactamente en cada día?
        </h2>

        {/* Etiqueta del día */}
        <div className="inline-flex items-center bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-full mb-4 mt-10">
          <CalendarDays className="w-4 h-4 mr-2" />
          Día 1 - Sábado: Creación en vivo
        </div>

        {/* Fase */}
        <h3 className="text-blue-600 text-2xl font-bold mb-8">
          FASE 1: <span className="text-gray-800">Oferta Irresistible</span>
        </h3>

        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
            >
              <p className="text-[11px] text-gray-500 uppercase font-semibold mb-1">
                Día 1 - Sábado: Creación en vivo
              </p>
              <div className="flex items-start gap-2">
                <div className="w-5 h-5 bg-blue-400 rounded-sm mt-1" />
                <p className="text-gray-800 font-medium text-base leading-snug">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

          {/* Etiqueta del día */}
      

        {/* Fase */}
        <h3 className="text-blue-600 text-2xl font-bold mb-8 mt-10">
          FASE 2: <span className="text-gray-800">Producto con IA</span>
        </h3>

        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
            >
              <p className="text-[11px] text-gray-500 uppercase font-semibold mb-1">
                Día 1 - Sábado: Creación en vivo
              </p>
              <div className="flex items-start gap-2">
                <div className="w-5 h-5 bg-blue-400 rounded-sm mt-1" />
                <p className="text-gray-800 font-medium text-base leading-snug">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Etiqueta del día */}
        <div className="inline-flex items-center bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-full mb-4 mt-10">
          <CalendarDays className="w-4 h-4 mr-2" />
          DÍA 2 - DOMINGO: LANZAMIENTO EN VIVO
        </div>

        {/* Fase */}
        <h3 className="text-blue-600 text-2xl font-bold mb-8">
          FASE 3: <span className="text-gray-800">Embudo de venta</span>
        </h3>

        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
            >
              <p className="text-[11px] text-gray-500 uppercase font-semibold mb-1">
                DÍA 2 - DOMINGO: LANZAMIENTO EN VIVO
              </p>
              <div className="flex items-start gap-2">
                <div className="w-5 h-5 bg-blue-400 rounded-sm mt-1" />
                <p className="text-gray-800 font-medium text-base leading-snug">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Etiqueta del día */}

        {/* Fase */}
        <h3 className="text-blue-600 text-2xl font-bold mb-8 mt-8">
          FASE 4: <span className="text-gray-800">Tráfico con IA</span>
        </h3>

        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
            >
              <p className="text-[11px] text-gray-500 uppercase font-semibold mb-1">
                DÍA 2 - DOMINGO: LANZAMIENTO EN VIVO
              </p>
              <div className="flex items-start gap-2">
                <div className="w-5 h-5 bg-blue-400 rounded-sm mt-1" />
                <p className="text-gray-800 font-medium text-base leading-snug">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
