import React from "react";

const Componente6 = () => {
  return (
    <section className="bg-white text-gray-800 py-16 px-6 md:px-20 text-center">
      {/* Título principal */}
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        TU TRANSFORMACIÓN{" "}
        <span className="text-green-600 border-4 border-green-500 rounded-full px-2 py-1">
          EN 48 HORAS
        </span>
      </h2>

      {/* Comparativa Antes / Después */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
        {/* ANTES */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg shadow-sm p-6 text-left">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">
            ANTES <span className="font-normal text-gray-500">(Tu realidad actual)</span>:
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>❌ Frustrado sin perspectivas de crecimiento</li>
            <li>❌ Múltiples cursos comprados sin aplicar</li>
            <li>❌ IA parece imposible de entender</li>
            <li>❌ Sin claridad sobre qué crear o cómo vender</li>
            <li>❌ Trabajando duro solo para sobrevivir</li>
            <li>❌ Dependiendo de un salario que no alcanza</li>
            <li>❌ Viendo pasar los años sin cambios reales</li>
          </ul>
        </div>

        {/* DESPUÉS */}
        <div className="bg-green-50 border border-green-400 rounded-lg shadow-sm p-6 text-left">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">
            DESPUÉS <span className="font-normal text-gray-500">(Tu nueva realidad)</span>:
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>✅ Producto digital creado, estructurado y listo para vender</li>
            <li>✅ Dominio práctico de IA aplicada a negocios digitales</li>
            <li>✅ Método claro y replicable en tus manos</li>
            <li>✅ Nueva fuente de ingresos funcionando</li>
            <li>✅ Confianza para construir tu futuro digital</li>
            <li>✅ Libertad financiera, de tiempo y geográfica</li>
            <li>✅ Orgullo de haber creado algo con tus propias manos</li>
          </ul>
        </div>
      </div>

      {/* Texto final */}
      <p className="text-gray-700 mb-2">
        La pregunta no es si funcionará.{" "}
        <span className="font-semibold">La pregunta es:</span>
      </p>
      <h3 className="text-2xl md:text-3xl font-bold mb-8">
        ¿Cuándo quieres empezar?
      </h3>

      {/* Botón CTA */}
      <button className="bg-green-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-green-700 transition-all duration-300">
        QUIERO MI TRANSFORMACIÓN AHORA →
      </button>
    </section>
  );
};

export default Componente6;
