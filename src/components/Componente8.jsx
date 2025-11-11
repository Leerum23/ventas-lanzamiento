import { useEffect, useRef } from "react";
import img1 from "../assets/captura1.png";
import img2 from "../assets/captura2.png";
import img3 from "../assets/captura3.png";
import img4 from "../assets/captura4.png";

export default function TestimonialsCarousel() {
  const scrollRef = useRef(null);

  // Efecto de desplazamiento automático
  useEffect(() => {
    const container = scrollRef.current;
    let scrollAmount = 0;
    const speed = 0.5; // Ajusta la velocidad (más alto = más rápido)

    const scroll = () => {
      if (container) {
        scrollAmount += speed;
        if (scrollAmount >= container.scrollWidth / 2) scrollAmount = 0;
        container.scrollTo({ left: scrollAmount, behavior: "smooth" });
      }
      requestAnimationFrame(scroll);
    };

    const animation = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animation);
  }, []);

  // Imágenes de testimonios (repetidas para el bucle infinito)
const images = [img1, img2, img3, img4];

  // Duplicamos las imágenes para efecto continuo
  const duplicatedImages = [...images, ...images];

  return (
    <section className="bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-8">
          LOS TESTIMONIOS DE LOS QUE <br className="hidden md:block" />
          PARTICIPARON EN LA ÚLTIMA EDICIÓN:
        </h2>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden scroll-smooth"
        >
          {duplicatedImages.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[250px] md:w-[300px] rounded-lg overflow-hidden shadow-md bg-black"
            >
              <img
                src={src}
                alt={`testimonio-${i}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
