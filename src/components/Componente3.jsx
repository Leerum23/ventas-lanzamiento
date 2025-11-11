import React from "react";
import { FiX, FiArrowRight } from "react-icons/fi";

const problemas = [
  "Ganan en un mes lo que tú ganas en un año",
  "Trabajan desde donde quieren",
  'Vendieron productos digitales "mientras dormían"',
  "Usan IA como si fuera magia",
];

const Componente3 = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* --- PRIMERA PARTE --- */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          🔮 DÉJAME ADIVINAR…
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Llegas a casa después de{" "}
          <span className="text-red-500 font-semibold">
            8, 9, 10 horas de trabajo. Estás agotado.
          </span>{" "}
          Prendes el teléfono y ves historias de personas que:
        </p>

        <ul className="text-left mt-6 space-y-3 max-w-md mx-auto">
          {problemas.map((texto, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-gray-800 text-lg hover:text-red-500 transition-colors"
            >
              <FiX className="text-red-500 mt-1 flex-shrink-0" />
              {texto}
            </li>
          ))}
        </ul>

        {/* --- SEPARADOR --- */}
        <div className="h-[1px] bg-gray-200 my-12 w-3/4 mx-auto" />

        {/* --- SEGUNDA PARTE --- */}
        <p className="text-gray-600 italic mb-2">Y piensas:</p>
        <h3 className="text-3xl font-bold mb-4">
          “¿Por qué ellos sí{" "}
          <span className="text-red-600 underline decoration-red-600/30 underline-offset-4">
            y yo no?
          </span>
          ”
        </h3>

        <p className="text-gray-600 mb-2">La respuesta es simple:</p>
        <h4 className="text-3xl font-extrabold mb-6">
          Ellos tienen el{" "}
          <span className="text-green-600 underline decoration-green-500/30 underline-offset-4">
            método correcto
          </span>
        </h4>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Tú has intentado. Has comprado cursos. Has visto videos en YouTube
          hasta altas horas.{" "}
          <span className="font-semibold">
            Pero siempre terminas en el mismo lugar: con más información y los
            mismos resultados.
          </span>
        </p>

        <div className="flex items-center justify-center gap-2 text-left text-gray-800 max-w-md mx-auto">
          <FiArrowRight className="text-red-500 text-2xl flex-shrink-0" />
          <p className="text-base md:text-lg">
            <span className="font-bold text-red-600">
              El problema no eres tú.
            </span>{" "}
            <span className="font-bold">El problema es que: nadie te mostró un sistema práctico y rentable.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Componente3;
