// src/components/Recibes.js
import React from "react";
import { CheckCircle } from "lucide-react";
import img1 from "../assets/workshop.webp";
import img2 from "../assets/celu.webp";


export default function Componente9() {
  const items = [
    {
      title: "WORKSHOP EN VIVO",
      oldPrice: "$497",
      image: img1,
      points: [
        "16 horas de contenido intensivo en 2 días",
        "Método O.P.E.T. paso a paso",
        "Creás tu producto durante las clases",
        "Acompañamiento en tiempo real",
      ],
    },
    {
      title: "PACK DE AGENTES IA LISTOS",
      oldPrice: "$297",
      image: img2,
      points: [
        "Agente de espionaje de ofertas",
        "Agente creador de ofertas irresistibles",
        "Agente creador de productos digitales",
        "Agente creador de páginas de ventas",
        "Agente de creativos publicitarios y mucho +",
      ],
    },
  ];

  return (
    <section className="bg-gray-50 py-12 px-6 md:px-12 rounded-2xl">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-900 mb-10 uppercase">
          Esto es exactamente lo que recibes:
        </h2>

        <div className="flex flex-col gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row items-center md:items-start bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition"
            >
              {/* Imagen */}
              <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-48 object-contain"
                />
              </div>

              {/* Contenido */}
              <div className="md:w-2/3 md:pl-8 text-center md:text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {item.title}{" "}
                  <span className="text-red-500 line-through text-base font-semibold">
                    {item.oldPrice}
                  </span>
                </h3>

                <ul className="mt-3 space-y-2 text-gray-700">
                  {item.points.map((point, j) => (
                    <li key={j} className="flex items-start justify-center md:justify-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
