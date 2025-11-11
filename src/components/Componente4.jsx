import React from "react";
import imagen from "../assets/opet.png"

const Componente4 = () => {
  return (
    <section className="bg-white text-gray-800 py-16 px-6 md:px-20 text-center">
      {/* Encabezado */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-2">
        Te presento el:
      </h2>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Método <span className="text-blue-500">O.P.E.T.™</span>
      </h1>
      <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
        El único sistema que convierte ideas en productos digitales vendibles
        usando IA en tiempo récord.
      </p>

      {/* Contenedor de fases */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center max-w-6xl mx-auto">
        {/* Columna izquierda (Fase 1 y 4 en desktop) */}
        <div className="flex flex-col justify-center gap-12 order-1 md:order-none">
          {/* Fase 1 */}
          <div className="text-left md:text-right">
            <h3 className="text-lg font-bold mb-2">
              <span className="mr-2">🎯</span>FASE 1: OFERTA IRRESISTIBLE
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              No necesitas una idea “brillante”. Necesitas una oferta que el
              mercado quiera comprar. Te enseño a usar IA para identificar
              necesidades reales y crear ofertas de alta conversión.
            </p>
          </div>

          {/* Fase 4 */}
          <div className="text-left md:text-right">
            <h3 className="text-lg font-bold mb-2">
              <span className="mr-2">🚀</span>FASE 4: TRÁFICO CON IA
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Aquí es donde la magia sucede. Con agentes de IA entrenados,
              crearás productos digitales completos: ebooks, cursos,
              audiolibros, templates. Sin ser experto. Sin conocimiento técnico.
              Sin aparecer en cámaras.
            </p>
          </div>
        </div>

        {/* Imagen central */}
        <div className="order-2 md:order-none flex justify-center">
          <img
            src={imagen}
            alt="Método OPET"
            className="w-56 md:w-72 lg:w-80 rounded-xl shadow-lg mx-auto"
          />
        </div>

        {/* Columna derecha (Fase 2 y 3 en desktop) */}
        <div className="flex flex-col justify-center gap-12 order-3 md:order-none">
          {/* Fase 2 */}
          <div className="text-left">
            <h3 className="text-lg font-bold mb-2">
              <span className="mr-2">🪄</span>FASE 2: PRODUCTO CON IA
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Aquí es donde la magia sucede. Con agentes de IA entrenados,
              crearás productos digitales completos: ebooks, cursos,
              audiolibros, templates. Sin ser experto. Sin conocimiento técnico.
              Sin aparecer en cámaras.
            </p>
          </div>

          {/* Fase 3 */}
          <div className="text-left">
            <h3 className="text-lg font-bold mb-2">
              <span className="mr-2">💎</span>FASE 3: EMBUDO DE VENTA
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Tu producto necesita una “máquina de vender”. Te muestro cómo
              crear páginas de venta, checkout optimizado, y productos
              complementarios que convierten visitantes en compradores.
            </p>
          </div>
        </div>
      </div>

      {/* Resultado final */}
      <p className="mt-12 text-gray-700 font-medium text-base md:text-lg">
        El resultado:{" "}
        <span className="text-green-500 font-semibold">
          En 48 horas pasas de la idea al producto vendiendo.
        </span>
      </p>
    </section>
  );
};

export default Componente4;
