// src/components/Bonos.js
import React from "react";
import { CheckCircle } from "lucide-react";
import img from "../assets/Portada-libroA5.png";
import img2 from "../assets/ebook2.png";

export default function Componente10() {
  const bonos = [
    {
      title: "EBOOK RESUMEN",
      oldPrice: "$97",
      image: img2,
      description:
        "Recibirás un resumen de lo visto en la clase",
    },
    {
      title: "LIBRO MENTE INQUEBRANTABLE",
      oldPrice: "$197",
      image: img,
      description:
        "Acceso al resumen del libro que te ayuda a forjar hábitos exitosos.",
    },
  ];

  return (
    <section className="bg-blue-900 py-12 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Título */}
        <h2 className="text-center text-white text-2xl md:text-2xl font-bold uppercase mb-10">
          Y además recibirás:
        </h2>

        {/* Contenedor de bonos */}
        <div className="flex flex-col gap-8">
          {bonos.map((bono, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row items-center md:items-start bg-blue-800 rounded-2xl p-6 md:p-8 shadow-lg"
            >
              {/* Imagen */}
              <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
                <img
                  src={bono.image}
                  alt={bono.title}
                  className="max-h-48 object-contain drop-shadow-lg"
                />
              </div>

              {/* Contenido */}
              <div className="md:w-2/3 md:pl-8 text-center md:text-left text-white">
                <h3 className="text-xl font-bold mb-2">
                  {bono.title}{" "}
                  <span className="text-red-400 line-through text-base font-semibold">
                    {bono.oldPrice}
                  </span>
                </h3>
                <p className="text-gray-100 text-sm md:text-base leading-relaxed">
                  {bono.description}
                </p>
              </div>
            </div>
          ))}
        </div>

       <h3 className="text-center text-white text-2xl font-bold uppercase mt-10">
        VALOR TOTAL:{" "}
        <span className="line-through decoration-red-500">
          USD $1.555
        </span>
      </h3>

      </div>
    </section>
  );
}
