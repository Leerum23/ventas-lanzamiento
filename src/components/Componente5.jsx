import React from "react";
import img1 from "../assets/juan1.jpg";
import img2 from "../assets/juan2.jpg";
import img3 from "../assets/juan3.jpg";
const Componente5 = () => {
  return (
    <section className="bg-gray-50 text-gray-800 py-16 px-6 md:px-20 text-center">
      {/* Título */}
      <h2 className="text-xl md:text-2xl font-semibold mb-8 uppercase tracking-wide">
        ¿Quién está detrás de este método?
      </h2>

      {/* Imágenes */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 mb-10">
        <img
          src={img3}
          alt="Imagen lateral izquierda"
          className="w-40 md:w-52 lg:w-56 rounded-lg shadow-md transform rotate-[-6deg] hover:rotate-0 transition-transform duration-300"
        />
        <img
          src={img1}
          alt="Imagen central"
          className="w-48 md:w-64 lg:w-72 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
        />
        <img
          src={img2}
          alt="Imagen lateral derecha"
          className="w-40 md:w-52 lg:w-56 rounded-lg shadow-md transform rotate-[6deg] hover:rotate-0 transition-transform duration-300"
        />
      </div>

      {/* Nombre */}
      <h3 className="text-2xl md:text-3xl font-bold mb-6">Juan Azu</h3>

      {/* Métricas principales */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
        <div className="flex items-center gap-2 text-blue-600 font-medium">
          <span>💎</span>
          <span>+US$3.000.000 en ventas generadas</span>
        </div>
        <div className="flex items-center gap-2 text-blue-600 font-medium">
          <span>🎓</span>
          <span>+2.500 alumnos transformados</span>
        </div>
      </div>

      {/* Descripción */}
      <p className="text-gray-700 max-w-3xl mx-auto text-base md:text-lg leading-relaxed mb-8">
        Brasileño y especialista en ventas digitales y creador de productos que
        generaron más de{" "}
        <span className="font-semibold text-gray-900">
          US$3.000.000 en ventas online
        </span>
        .
      </p>

      <p className="text-gray-700 max-w-3xl mx-auto text-base md:text-lg leading-relaxed mb-8">
        Durante los últimos 6 años, ha trabajado en el desarrollo, lanzamiento y
        escalada de productos digitales en distintos nichos — desde
        espiritualidad hasta inteligencia artificial — ayudando a emprendedores
        a facturar desde cero hasta múltiples cinco cifras mensuales.
      </p>

      {/* Métricas secundarias */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-10">
        <div className="flex items-center gap-2 text-blue-600 font-medium">
          <span>🚀</span>
          <span>+500 productos digitales lanzados</span>
        </div>
        <div className="flex items-center gap-2 text-blue-600 font-medium">
          <span>⏳</span>
          <span>6 años perfeccionando la metodología</span>
        </div>
      </div>

      {/* Enfoque */}
      <p className="text-gray-800 font-medium max-w-2xl mx-auto">
        Mi enfoque no es enseñar teoría.{" "}
        <span className="font-bold">
          Es crear sistemas que funcionen para personas comunes, sin experiencia,
          que quieren resultados reales.
        </span>
      </p>
    </section>
  );
};

export default Componente5;
