import { useState } from "react";
import { FiInfo } from "react-icons/fi";

const faqs = [
  {
    question: '“No sé nada de inteligencia artificial”',
    answer:
      'Perfecto. Este workshop está diseñado para principiantes absolutos. Los agentes IA ya están entrenados. Tú solo sigues instrucciones simples. Si sabes usar WhatsApp, puedes usar IA.',
  },
  {
    question: '“¿Y si creo algo y nadie lo compra?”',
    answer:
      'Aprenderás cómo validar ideas rápidamente antes de invertir tiempo o dinero.',
  },
  {
    question: '“No tengo tiempo para otro curso más”',
    answer:
      'El contenido está optimizado para que avances en sesiones cortas y prácticas.',
  },
  {
    question: '“¿Funciona para empleados sin experiencia?”',
    answer:
      'Sí, el workshop parte desde cero y no requiere conocimientos previos.',
  },
  {
    question: '“Ese precio… ¿no será muy básico?”',
    answer:
      'El valor está en la aplicación práctica, no en la duración. Te llevas herramientas reales.',
  },
  {
    question: '“¿El workshop será en español?”',
    answer: 'Sí, todo el contenido está completamente en español.',
  },
  {
    question: '“¿Necesito invertir en herramientas caras?”',
    answer:
      'No. Usarás herramientas gratuitas o con versiones free perfectamente funcionales.',
  },
  {
    question: '“¿Y si no logro aplicar lo que enseñas?”',
    answer:
      'El acompañamiento está diseñado para que avances paso a paso y puedas aplicarlo enseguida.',
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="bg-gray-50 py-10 px-4">
         <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        TUS PRINCIPALES DUDAS RESUELTAS:
      </h2>

      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg shadow-sm overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full flex justify-between items-center p-4 text-left text-gray-900 font-medium hover:bg-gray-200 transition-colors"
            >
              <span>{faq.question}</span>
              <FiInfo
                className={`text-gray-500 transform transition-transform duration-300 ${
                  activeIndex === index ? "rotate-90" : ""
                }`}
              />
            </button>

            {/* Contenedor animado */}
            <div
              className={`grid transition-all duration-500 ease-in-out ${
                activeIndex === index
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden px-4 pb-4 text-gray-700 text-sm">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
