// src/components/Garantia.js
import React from "react";
import imagen from "../assets/garantia.png"

export default function Componente12() {
  return (
    <section className="bg-gray-100 py-12 px-6 md:px-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Texto */}
        <div className="md:w-1/2 text-gray-800 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
            GARANTÍA INCONDICIONAL <br />
            DE <span className="text-blue-600">30 DÍAS</span>
          </h2>

          <p className="text-gray-700 mb-4">
            Participa del workshop completo. Aplica todo lo que enseño. Si
            después de 30 días no sientes que valió cada centavo, me escribes y
            te devuelvo tu dinero completo.
          </p>

          <p className="text-gray-700 mb-4">
            Sin preguntas. Sin complicaciones.
          </p>

          <p className="text-gray-700 mb-4">
            ¿Por qué ofrezco esta garantía? Porque estoy seguro de que el método
            funciona. Y porque quiero que tomes la decisión sin miedo.
          </p>

          <p className="font-semibold text-gray-900 text-lg">
            El riesgo es mío, no tuyo.
          </p>
        </div>

        {/* Imagen de sello */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={imagen}
            alt="Garantía 30 días"
            className="max-w-[250px] md:max-w-[300px] object-contain drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
