import React from "react";

const Componente6 = () => {
  return (
    <section className="bg-white text-gray-800 py-16 px-6 md:px-20 text-center">
      {/* Título principal */}
      <h2 className="text-3xl md:text-2xl font-bold mb-12">
        RESULTADOS{" "}
        <span className="text-green-600 border-4 border-green-500 rounded-full px-2 py-1">
          DEL WORKSHOP
        </span>
      </h2>

      {/* Comparativa Antes / Después */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
        {/* ANTES */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg shadow-sm p-6 text-left">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">
            ANTES 
            {/* <span className="font-normal text-gray-500">(Tu realidad actual)</span>: */}
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>❌ Crees que resulta muy difícil</li>
            <li>❌ No tienes claridad para aplicar</li>
            <li>❌ Solo has intentado de sobrevivir</li>
            <li>❌ El tiempo pasa y nada cambia</li>
    
            {/* <li>❌ Dependiendo de un salario que no alcanza</li>
            <li>❌ Viendo pasar los años sin cambios reales</li> */}
          </ul>
        </div>

        {/* DESPUÉS */}
        <div className="bg-green-50 border border-green-400 rounded-lg shadow-sm p-6 text-left">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">
            DESPUÉS  
            {/* <span className="font-normal text-gray-500">(Tu nueva realidad)</span>: */}
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>✅ Creaste tu producto digital listo para vender</li>
            <li>✅ Obtuviste resultados casi inmediatos</li>
            <li>✅ Aprendiste un método claro y fácil para escalar tu marca personal</li>
            <li>✅ Mentalidad ganadora</li>
            <li>✅ Nuevas fuentes de ingreso funcionando 24/7</li>
            {/* <li>✅ Libertad financiera, de tiempo y geográfica</li>
            <li>✅ Orgullo de haber creado algo con tus propias manos</li> */}
          </ul>
        </div>
      </div>

      {/* Texto final */}
      <p className="text-gray-700 mb-2">
        Esto fue creado para vos. {" "}
        {/* <span className="font-semibold">La pregunta es:</span> */}
      </p>
      <h3 className="text-2xl md:text-3xl font-bold mb-8">
        ¿Qué esperas para cambiar tu vida?
      </h3>

      {/* Botón CTA */}
      <button className="bg-green-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-green-700 transition-all duration-300">
        QUIERO PARTICIPAR →
      </button>
    </section>
  );
};

export default Componente6;
