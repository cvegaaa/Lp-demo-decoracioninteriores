import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Interior de diseño contemporáneo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/40 to-stone-900/80" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="text-amber-300/90 tracking-[0.3em] uppercase text-xs md:text-sm font-medium mb-6 animate-[fadeUp_1s_ease-out]">
          Estudio de diseño de interiores · Barcelona
        </p>
        <h1 className="font-serif text-stone-50 text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight animate-[fadeUp_1s_ease-out_0.1s_both]">
          Espacios que
          <span className="block italic text-amber-200/95">cuentan tu historia</span>
        </h1>
        <p className="mt-8 text-stone-200/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light animate-[fadeUp_1s_ease-out_0.2s_both]">
          Diseñamos interiores atemporales donde la artesanía se encuentra con el
          confort. Cada proyecto es una conversación entre tu vida y el espacio
          que habita.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-[fadeUp_1s_ease-out_0.3s_both]">
          <a
            href="#portfolio"
            className="px-8 py-4 bg-stone-50 text-stone-900 rounded-full font-medium hover:bg-white transition-all duration-300 hover:scale-[1.02]"
          >
            Ver nuestros proyectos
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-stone-50/40 text-stone-50 rounded-full font-medium hover:bg-stone-50/10 transition-all duration-300"
          >
            Agenda una consulta
          </a>
        </div>
      </div>

      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-stone-50/70 hover:text-stone-50 transition-colors animate-bounce"
        aria-label="Desplázate hacia abajo"
      >
        <ArrowDown size={22} />
      </a>
    </section>
  );
}
