// src/components/Bonos.js
import React from "react";
import { CheckCircle } from "lucide-react";

export default function Componente10() {
  const bonos = [
    {
      title: "WORKBOOK PRÁCTICO",
      oldPrice: "$97",
      image: "https://cdn-icons-png.flaticon.com/512/942/942799.png",
      description:
        "Recibirás un cuaderno de ejercicios prácticos con ejercicios y tareas para aplicar todo el contenido aprendido en el taller, para que no sea más contenido que solo te llene la cabeza de información. ¡AQUÍ LO APLICARÁS TODO!",
    },
    {
      title: "10 OFERTAS VÁLIDAS",
      oldPrice: "$197",
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      description:
        "Te daré una lista con 10 ofertas validadas para que no tengas que crear una desde cero. Tú elegirás una y yo te enseñaré a modelarla.",
    },
  ];

  return (
    <section className="bg-blue-900 py-12 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Título */}
        <h2 className="text-center text-white text-2xl md:text-3xl font-bold uppercase mb-10">
          Y además de todo eso, también recibirás bonos exclusivos:
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
      </div>
    </section>
  );
}
