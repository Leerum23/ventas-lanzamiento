import React, { useState, useEffect } from "react";

const cards = [
   {
    id: 1,
    titulo: "EMPLEADO ESTANCADO",
    descripcion:
      'Trabajas 8+ horas al día, ganas "razonablemente bien" pero vives al límite. Sientes que los años pasan y sigues en el mismo lugar.',
    icono: "💼",
    imagen: "https://img.freepik.com/foto-gratis/hombre-deprimido-tiro-medio-mesa_23-2148773950.jpg?t=st=1762735192~exp=1762738792~hmac=fef500ab16a197ec026fd8f05a64d45b5d8cd695fa86b3b299aa35fe78eda713&w=1060",
  },
  {
    id: 2,
    titulo: "FRUSTRADO DIGITAL",
    descripcion:
      'Ya intentaste cursos, tutoriales de YouTube, métodos "infalibles"... pero solo acumulaste información sin resultados concretos.',
    icono: "⌛️",
    imagen: "https://img.freepik.com/foto-gratis/alto-angulo-mujer-que-trabaja-computadora-portatil_23-2148481563.jpg?t=st=1762734942~exp=1762738542~hmac=71fabcf5c5c1d5b6cef1f62de5a063b47c5bd5ee6fc3217bb311fdeb8fa52ac7&w=1060",
  },
  {
    titulo: "CURIOSO DE LA IA",
    descripcion: "Ves que otros prosperan usando inteligencia artificial, pero a ti te parece complicado, técnico, \"para expertos\".",
    icono: "💻",
    imagen: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
  },
  {
    titulo: "BUSCADOR DE LIBERTAD",
    descripcion: "Quieres una fuente de ingresos que no dependa de jefes, horarios o ubicación geográfica, pero no sabes por dónde empezar.",
    icono: "💵 ",
    imagen: "https://img.freepik.com/foto-gratis/hombre-que-usa-smartphone-barandillas_23-2147771379.jpg?t=st=1762734802~exp=1762738402~hmac=832af90a14dde85276f208a4536947d78d261ead5bd6c8a9912175ce4afbe0d2&w=1060"
  }
];

export default function Componente2() {

  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-12">
          ¿<span className="text-blue-500">TE IDENTIFICAS</span> CON ALGUNA DE ESTAS SITUACIONES?
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {cards.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={item.imagen}
                alt={item.titulo}
                className="w-full h-48 object-cover rounded-lg mb-5"
              />
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-3">
                <span className="text-2xl">{item.icono}</span> {item.titulo}
              </h3>
              <p className="text-gray-600">{item.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

