import { useState } from "react";
import { FiInfo } from "react-icons/fi";

const faqs = [
  {
    question: '“No sé nada de IA”',
    answer:
      'Solo tienes que seguir instrucciones, nada más.',
  },
  {
    question: '“¿Y si nadie me compra?”',
    answer:
      'Imposible, es un sistema validado que está funcionando.',
  },
  {
    question: '“No tengo tiempo”',
    answer:
      'Solo necesitas dos días y algo de tiempo libre para cambiar tu vida.',
  },
  {
    question: '“¿Funciona para quienes están trabajando?”',
    answer:
      'Obvio, solo tiene que dedicar 2 horas diarias.',
  },
  {
    question: '“Por este precio… ¿no será muy básico?”',
    answer:
      'No, este es el contenido que necesitas.',
  },
  {
    question: '“¿El workshop será en español?”',
    answer: 'Sí, todo el contenido está completamente en español.',
  },
  {
    question: '“¿Necesito invertir mucho dinero?”',
    answer:
      'No. Casi todas las herramientas que usamos son en versión gratuita.',
  },
  {
    question: '“¿Y si no logro aplicar lo que enseñas?”',
    answer:
      'Tienes 7 días de garantía.',
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
      <h2 className="text-2xl md:text-2xl font-bold text-center mb-8">
        TUS PRINCIPALES DUDAS:
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
