// export default function Componente11_2() {
//   return (
//     <section className="bg-gradient-to-b from-black via-gray-900 to-black py-16 px-6 md:px-12 rounded-t-3xl mt-10">
//       <div className="max-w-2xl mx-auto text-center text-white">

//         {/* Texto principal */}
//         <h2 className="text-2xl md:text-3xl font-semibold mb-6 leading-snug">
//           Pero decidí que la inversión <span className="text-green-400">no sea un impedimento</span> para cambiar tu vida.
//         </h2>

//         {/* Anclaje de precios */}
//         <div className="space-y-4 mb-10">
//           <p className="text-xl md:text-2xl text-red-400 line-through font-semibold">
//             No pagarás $497
//           </p>

//           <p className="text-lg md:text-xl text-red-300 line-through">
//             No pagarás la mitad de la mitad $249
//           </p>

//           <p className="text-lg md:text-xl text-red-300 line-through">
//             Ni la mitad $149
//           </p>
//         </div>

//         {/* Precio final destacado */}
//         <div className="mb-10">
//           <p className="text-lg md:text-xl text-gray-300 mb-2">
//             Pagarás algo ridículo
//           </p>

//           <h1 className="text-6xl md:text-7xl font-extrabold text-green-400 drop-shadow-lg">
//             $4
//           </h1>

//           <p className="text-gray-400 mt-3">
//             Para que el valor no te impida cambiar.
//           </p>
//         </div>

//         {/* CTA */}
//         <button className="bg-green-500 hover:bg-green-600 active:scale-95 transition-all duration-200 text-white font-bold text-lg px-10 py-4 rounded-full shadow-xl">
//           QUIERO APROVECHAR POR $4 🚀
//         </button>

//       </div>
//     </section>
//   );
// }

export default function Componente11_2() {
  return (
    <section className="bg-gradient-to-br from-sky-500 via-indigo-600 to-violet-700 py-16 px-6 md:px-12 rounded-t-3xl mt-10">
      <div className="max-w-2xl mx-auto text-center text-white">

        {/* Texto principal */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 leading-snug">
          Pero decidí que la inversión{" "}
          <span className="text-yellow-300">no sea un impedimento</span>{" "}
          para cambiar tu vida.
        </h2>

        {/* Anclaje de precios */}
        <div className="space-y-4 mb-10">
          <p className="text-xl md:text-2xl text-white/80 line-through font-semibold">
            No pagarás $497
          </p>

          <p className="text-lg md:text-xl text-white/70 line-through">
            No pagarás la mitad de la mitad $249
          </p>

          <p className="text-lg md:text-xl text-white/70 line-through">
            Ni la mitad $149
          </p>
        </div>

        {/* Precio final destacado */}
        <div className="mb-10">
          <p className="text-lg md:text-xl text-white/90 mb-2">
            Pagarás algo ridículo
          </p>

          <h1 className="text-6xl md:text-7xl font-extrabold text-yellow-300 drop-shadow-2xl">
            $4
          </h1>

          <p className="text-white/80 mt-3">
            Para que el valor no te impida cambiar.
          </p>
        </div>

        {/* CTA */}
        <button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold text-lg px-10 py-4 rounded-full shadow-2xl transition-all duration-200 active:scale-95">
          QUIERO APROVECHAR POR $4 🚀
        </button>

      </div>
    </section>
  );
}
