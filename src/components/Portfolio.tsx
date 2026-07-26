import { useState } from 'react';

type Project = {
  title: string;
  category: string;
  location: string;
  image: string;
  span?: 'tall' | 'wide';
};

const projects: Project[] = [
  {
    title: 'Loft Diagonal',
    category: 'Residencial',
    location: 'Barcelona',
    image:
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1200',
    span: 'tall',
  },
  {
    title: 'Café Lumen',
    category: 'Comercial',
    location: 'Gràcia',
    image:
      'https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Casa Marés',
    category: 'Residencial',
    location: 'Sitges',
    image:
      'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Oficina Miró',
    category: 'Comercial',
    location: 'Poblenou',
    image:
      'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1200',
    span: 'wide',
  },
  {
    title: 'Penthouse Born',
    category: 'Residencial',
    location: 'El Born',
    image:
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

export default function Portfolio() {
  const [filter, setFilter] = useState<'Todos' | 'Residencial' | 'Comercial'>('Todos');
  const filters: Array<'Todos' | 'Residencial' | 'Comercial'> = ['Todos', 'Residencial', 'Comercial'];

  const visible = projects.filter((p) => filter === 'Todos' || p.category === filter);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-stone-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <p className="text-amber-400 tracking-[0.25em] uppercase text-xs font-semibold mb-4">
              Proyectos seleccionados
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-50 leading-tight">
              Trabajos que hablan por sí solos
            </h2>
          </div>
          <div className="flex gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === f
                    ? 'bg-amber-600 text-stone-50'
                    : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[280px]">
          {visible.map((p) => (
            <article
              key={p.title}
              className={`group relative overflow-hidden rounded-2xl ${
                p.span === 'tall'
                  ? 'md:row-span-2'
                  : p.span === 'wide'
                  ? 'md:col-span-2'
                  : ''
              }`}
            >
              <img
                src={p.image}
                alt={p.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-7">
                <p className="text-amber-300 text-xs tracking-[0.2em] uppercase mb-2">
                  {p.category} · {p.location}
                </p>
                <h3 className="font-serif text-2xl text-stone-50">{p.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
