import React from "react";
import imagen from "../assets/terminator2.png";
import "./Componente1.css"

export default function Componente1() {
  return (
    <div className="max-w-7xl mx-auto p-6 flex flex-col md:flex-row items-center gap-16 bg-white">

      {/* Texto izquierdo */}
      <div className="flex-1 w-full md:w-1/2">
        <div className="mb-4">
          <span className="text-xs bg-gray-900 text-white rounded px-2 py-[2px] tracking-wide font-semibold uppercase">
            Workshop
          </span>
          <p className="text-base mt-1 text-gray-600">
            <span className="font-bold">Apto principiantes</span>
          </p>
          {/* <h2 className="text-5xl font-extrabold text-blue-600 leading-tight">
            EN 48H
          </h2> */}
          <p className="text-sm text-gray-400 uppercase tracking-widest">Edición limitada</p>
        </div>

        {/* <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug mb-6"> */}
        <h1 className="text-4xl md:text-5xl font-extrabold leading-snug mb-6 
        bg-gradient-to-r from-[#1A61BE] via-[#62C8FF] to-[#1A61BE] 
        bg-clip-text text-transparent">
          Workshop de dos días <br />
           para generar desde <br />
           USD $1500
         
          {/* 2 Días conmigo creando <br />
          tu primer producto digital <br />
          con IA para facturar */}
        </h1>

        {/* <p className="text-3xl font-bold text-blue-600 mb-4">+ USD $3000/mes</p> */}
        <p className="text-lg text-gray-700 mb-6 italic">
          aunque no sepas nada de tecnología o te encuentres en cero
        </p>

        <p className="text-gray-700 mb-8 leading-relaxed text-lg">
          Va a ser en vivo y vas a armar tu producto al mismo tiempo que yo.
        </p>

      
      <ul className="flex justify-between text-gray-700 text-base bg-gray-100 rounded p-4 max-w-md mb-6 ">
        <li className="flex items-center gap-2">
          <span className="block w-3 h-3 rounded-full bg-green-500"></span>
          25 y 26 de Octubre
        </li>
        <li className="flex items-center gap-2">
          <span className="block w-3 h-3 rounded-full bg-green-500"></span>
          En vivo ONLINE 
        </li>
      </ul>

        
        {/* Botón verde */}
        <button className="bg-green-500 hover:bg-green-600 transition-colors text-white font-bold py-4 px-8 rounded-lg w-full max-w-md mb-6">
          QUIERO UNIRME AL WORKSHOP – SOLO U$4 <span className="inline-block ml-3">↗</span>
        </button>

        {/* Texto de progreso */}
        <p className="text-center font-semibold mb-2">
          50% del lote 5 <span className="line-through text-gray-400">AGOTADO</span>
        </p>

        {/* Barra de progreso */}
        <div className="w-full max-w-xs mx-auto rounded-full overflow-hidden shadow-lg" style={{background: 'linear-gradient(to right, #000000, #3c3c3c)'}}>
          <div className="h-8 rounded-full" style={{width: '50%', backgroundColor: 'red', boxShadow: '0 0 8px red'}}></div>
        </div>
      </div>
      

      {/* Imagen derecha */}
      <div className="flex-1 w-full md:w-1/2">
        <img
          src={imagen}
          alt="Workshop imagen"
          className="w-full rounded-md object-cover"
        />
      </div>
    </div>
  );
}
