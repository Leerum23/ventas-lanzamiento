import React, { useState, useEffect } from "react";

const cards = [
  {
    titulo: "EMPRENDEDORES ",
    descripcion: "Personas de espíritu emprendedor con o sin conocimiento.",
    icono: "💻",
    // imagen: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
    imagen:"https://img.freepik.com/foto-gratis/imagen-encantadora-joven-artista-carismatica-camisa-color-caqui-sonriendo-ampliamente-sintiendose-feliz-su-trabajo-proceso-creacion-sentada-taller-rodeada-accesorios-pintura_273609-893.jpg?t=st=1771015437~exp=1771019037~hmac=2d78a7fc9007972e82e6735ed3f842da343653bae9793da780a130fe326341c3&w=1060"
  },
  {
    id: 2,
    titulo: "PERSONAS CON CURSOS INEFICIENTES",
    descripcion:
    'Han probado cursos y aún no han tenido resultados.',
    icono: "⌛️",
    imagen:"https://img.freepik.com/fotos-premium/estudie-pensamiento-educacion-hombre-computadora-portatil-aprendizaje-electronico-escuela-universidad-remotas-enfoque-solucion-tecnologia-lectura-estudiante-casa-examen-conferencia-linea-universidad_590464-158731.jpg?ga=GA1.1.1255873241.1769904264&semt=ais_hybrid&w=740&q=80",
  //   imagen: "https://img.freepik.com/fotos-premium/joven-enfocado-usa-auriculares-estudiar-linea_135932-10925.jpg?ga=GA1.1.1255873241.1769904264&semt=ais_hybrid&w=740&q=80",
   },
  {
   id: 1,
   titulo: "ESTANCADOS",
   descripcion:
     'Para quienes están estancados profesionalmente y no logran avanzar.',
   icono: "💼",
   imagen: "https://img.freepik.com/fotos-premium/empresaria-india-madura-tomando-notas-proyecto-planificacion-trabajando-oficina-moderna_695242-2245.jpg?ga=GA1.1.1255873241.1769904264&semt=ais_hybrid&w=740&q=80",
 },
  {
    titulo: "PERSONAS QUE BUSCAN INGRESOS EXTRA",
    descripcion: "Si deseas libertad financiera, pero no sabes por dónde empezar.",
    icono: "💵 ",
    imagen: "https://img.freepik.com/fotos-premium/mujer-cafe-al-aire-libre-frente-al-coliseo-roma-italia_506452-15268.jpg?w=740"
  }
];

export default function Componente2() {

  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-12">
          <span className="text-blue-500"></span> Esto es para:
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
                className="w-full h-48 object-cover object-top rounded-lg mb-5"
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

