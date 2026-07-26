import { Home, Building2, Sofa, Ruler, Palette, Lightbulb } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Diseño Residencial',
    desc: 'Casas y apartamentos a medida que reflejan tu personalidad y rutina diaria.',
  },
  {
    icon: Building2,
    title: 'Espacios Comerciales',
    desc: 'Tiendas, oficinas y restaurantes que elevan la experiencia de marca.',
  },
  {
    icon: Sofa,
    title: 'Mobiliario a Medida',
    desc: 'Piezas únicas diseñadas y producidas con artesanos locales.',
  },
  {
    icon: Ruler,
    title: 'Dirección de Obra',
    desc: 'Coordinación integral de contratistas, plazos y calidad de ejecución.',
  },
  {
    icon: Palette,
    title: 'Consultoría de Color',
    desc: 'Paletas y materiales que aportan coherencia y calidez a cada estancia.',
  },
  {
    icon: Lightbulb,
    title: 'Iluminación',
    desc: 'Proyectos lumínicos que transforman atmósferas y destacan texturas.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p className="text-amber-700 tracking-[0.25em] uppercase text-xs font-semibold mb-4">
            Servicios
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900 leading-tight">
            Un acompañamiento completo, de la idea al último detalle
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200 border border-stone-200 rounded-2xl overflow-hidden">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-stone-50 p-10 hover:bg-white transition-colors duration-500"
            >
              <div className="w-12 h-12 rounded-full bg-amber-700/10 flex items-center justify-center mb-6 group-hover:bg-amber-700 transition-colors duration-500">
                <s.icon
                  size={22}
                  className="text-amber-700 group-hover:text-stone-50 transition-colors duration-500"
                />
              </div>
              <h3 className="font-serif text-xl text-stone-900 mb-3">{s.title}</h3>
              <p className="text-stone-600 leading-relaxed font-light">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
