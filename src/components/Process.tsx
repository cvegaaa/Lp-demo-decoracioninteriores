const steps = [
  {
    n: '01',
    title: 'Descubrimiento',
    desc: 'Una conversación profunda sobre tu vida, tus rituales y lo que el espacio necesita hacer por ti.',
  },
  {
    n: '02',
    title: 'Concepto',
    desc: 'Definimos la narrativa del proyecto: paleta, materiales, mobiliario y atmósfera general.',
  },
  {
    n: '03',
    title: 'Desarrollo',
    desc: 'Planos, renders 3D y selección de proveedores. Ajustamos cada detalle contigo.',
  },
  {
    n: '04',
    title: 'Ejecución',
    desc: 'Coordinamos obra, carpintería y decoración hasta la entrega llave en mano.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p className="text-amber-700 tracking-[0.25em] uppercase text-xs font-semibold mb-4">
            Proceso
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900 leading-tight">
            Cuatro fases, una sola obsesión: el detalle
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200 border border-stone-200 rounded-2xl overflow-hidden">
          {steps.map((s) => (
            <div key={s.n} className="bg-stone-50 p-10 hover:bg-white transition-colors duration-500">
              <span className="font-serif text-5xl text-amber-700/30 block mb-6">{s.n}</span>
              <h3 className="font-serif text-xl text-stone-900 mb-3">{s.title}</h3>
              <p className="text-stone-600 leading-relaxed font-light">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
