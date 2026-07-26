import { useEffect, useState } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Transformaron un piso oscuro en un hogar luminoso y funcional. Cada rincón tiene un porqué.',
    name: 'María Fernández',
    role: 'Propietaria · Loft Diagonal',
  },
  {
    quote:
      'La dirección de obra fue impecable. Cumplieron plazos y presupuesto sin sacrificar el diseño.',
    name: 'Jordi Puig',
    role: 'Propietario · Café Lumen',
  },
  {
    quote:
      'Sabían escuchar lo que no sabíamos expresar. El resultado supera lo que imaginábamos.',
    name: 'Anna Vidal',
    role: 'Propietaria · Casa Marés',
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-amber-700/5">
      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <Quote size={40} className="text-amber-700/40 mx-auto mb-8" />
        <div className="relative min-h-[200px]">
          {testimonials.map((t, idx) => (
            <blockquote
              key={t.name}
              className={`absolute inset-0 transition-all duration-700 ${
                idx === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
              }`}
            >
              <p className="font-serif text-2xl md:text-3xl text-stone-800 leading-relaxed italic">
                "{t.quote}"
              </p>
              <footer className="mt-8">
                <p className="text-stone-900 font-medium">{t.name}</p>
                <p className="text-stone-500 text-sm">{t.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === i ? 'w-8 bg-amber-700' : 'w-4 bg-stone-300'
              }`}
              aria-label={`Testimonio ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
