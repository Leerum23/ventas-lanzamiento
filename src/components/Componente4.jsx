import React from "react";
import imagen from "../assets/metodo2.png"

const Componente4 = () => {
  return (
    <section className="bg-white text-gray-800 py-16 px-6 md:px-20 text-center">
      {/* Encabezado */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-2">
        Te presento el:
      </h2>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
         <span className="text-blue-500">Entrenamiento - Método - Sistema</span> 
      </h1>
      <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
        Consta de 5 partes
      </p>

      {/* Contenedor de fases */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center max-w-6xl mx-auto">
        {/* Columna izquierda (Fase 1 y 4 en desktop) */}
        <div className="flex flex-col justify-center gap-12 order-1 md:order-none">
          {/* Fase 1 */}
          <div className="text-left md:text-right">
            <h3 className="text-lg font-bold mb-2">
              <span className="mr-2">🎯</span>PARTE 1: Producto sencillo
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Hecho con IA, tendrás un producto en tiempo record para que tenga alta conversión.
            </p>
          </div>

          {/* Fase 4 */}
          <div className="text-left md:text-right">
            <h3 className="text-lg font-bold mb-2">
              <span className="mr-2">🚀</span>PARTE 2: Una oferta irresistible
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Crearás una oferta tan buena que tus clientes no podrán dejarla pasar.
            </p>
          </div>
        </div>

        {/* Imagen central */}
        <div className="order-2 md:order-none flex justify-center">
          <img
            src={imagen}
            alt="Método OPET"
            className="w-56 md:w-72 lg:w-80 rounded-xl  mx-auto"
          />
        </div>

        {/* Columna derecha (Fase 2 y 3 en desktop) */}
        <div className="flex flex-col justify-center gap-12 order-3 md:order-none">
          {/* Fase 2 */}
          <div className="text-left">
            <h3 className="text-lg font-bold mb-2">
              <span className="mr-2">🪄</span>PARTE 3: Mentalidad inquebrantable
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Contarás con reglas que casi nadie te comparte y que contribuyen a definir tu éxito o fracaso.
            </p>
          </div>

          {/* Fase 3 */}
          <div className="text-left">
            <h3 className="text-lg font-bold mb-2">
              <span className="mr-2">💎</span>PARTE 4: Embudo de ventas
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Entenderás con facilidad cómo captar clientes para tu producto.
            </p>
          </div>
        </div>
      </div>

      {/* Resultado final */}
      {/* <p className="mt-12 text-gray-700 font-medium text-base md:text-lg">
        El resultado:{" "}
        <span className="text-green-500 font-semibold">
          En 48 horas pasas de la idea al producto vendiendo.
        </span>
      </p> */}

      <div className="text-center mt-10">
            <h3 className="text-lg font-bold mb-2">
              <span className="mr-2">📈</span>PARTE 5: Tráfico pago
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Potenciarás e incrementarás tu audiencia de la forma más conveniente.
            </p>
          </div>
    </section>
  );
};

export default Componente4;
