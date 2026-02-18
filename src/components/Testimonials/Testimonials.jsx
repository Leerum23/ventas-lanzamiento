import React from "react";
import "./Testimonials.css";
import foto1 from "../../../src/assets/mujer2.jpg";
import foto2 from "../../../src/assets/hombre5.avif";
import foto3 from "../../../src/assets/hombre4.avif";
import foto4 from "../../../src/assets/mujer4.avif";
import foto5 from "../../../src/assets/mujer.jpg";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    img: foto1, // URL de la foto de Valeria
    text: "«Aprendí a no darme por vencida tan fácil y usar mis recursos para manifestar lo que quería.»",
    name: "Laura Oliva"
  },
  {
    img: foto4, // URL de la foto de Ricardo
    text: "«Fue fácil de entender y en poco tiempo me dio herramientas de crecimiento.»",
    name: "Marta Sanchez"
  },
  {
    img: foto2, // URL de la foto de Ricardo
    text: "«Juan Azu siempre está atento a los detalles, y el contenido es concreto.»",
    name: "Pedro Olazabal"
  },
  {
    img: foto5, // URL de la foto de Ricardo
    text: "«Es un workshop distinto y muy eficiente para quienes buscan resultados.»",
    name: "Ines Mantavera"
  },
  {
    img: foto3, // URL de la foto de Gonzalo
    text: "«La guía me ayudo a programar mis metas y a no posponer tanto»",
    name: "Oscar Simonetti"
  }
];

export default function Testimonials() {
  const scrollRef = useRef(null);

   const duplicatedTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    const container = scrollRef.current;
    let scrollAmount = 0;
    const speed = 0.4; // velocidad (más alto = más rápido)

    const scroll = () => {
      if (container) {
        scrollAmount += speed;

        if (scrollAmount >= container.scrollWidth / 2) {
          scrollAmount = 0;
        }

        container.scrollLeft = scrollAmount;
      }

      requestAnimationFrame(scroll);
    };

    const animation = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animation);
  }, []);

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Historias de progreso
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Conoce personas que no se conformaron y avanzaron por más en la vida.
        </p>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden"
      >
        {duplicatedTestimonials.map((t, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[280px] md:w-[320px] bg-white rounded-2xl shadow-md p-6"
          >
            <div className="flex flex-col items-center text-center">
              <img
                src={t.img}
                alt={t.name}
                className="w-20 h-20 rounded-full object-cover mb-4"
              />

              <p className="text-gray-700 italic mb-4 text-sm md:text-base">
                {t.text}
              </p>

              <p className="font-semibold text-gray-900">
                {t.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}