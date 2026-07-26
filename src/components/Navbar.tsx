import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Servicios', href: '#services' },
  { label: 'Proyectos', href: '#portfolio' },
  { label: 'Proceso', href: '#process' },
  { label: 'Testimonios', href: '#testimonials' },
  { label: 'Contacto', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-stone-50/90 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a
          href="#home"
          className={`font-serif text-2xl tracking-tight transition-colors duration-300 ${
            scrolled ? 'text-stone-900' : 'text-stone-50'
          }`}
        >
          Atelier<span className="text-amber-700">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-amber-700 ${
                  scrolled ? 'text-stone-700' : 'text-stone-100'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className={`hidden md:inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
            scrolled
              ? 'bg-stone-900 text-stone-50 hover:bg-stone-800'
              : 'bg-stone-50/95 text-stone-900 hover:bg-white'
          }`}
        >
          Agenda una consulta
        </a>

        <button
          className={`md:hidden ${scrolled ? 'text-stone-900' : 'text-stone-50'}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-stone-50 border-t border-stone-200">
          <ul className="flex flex-col px-6 py-4 gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-stone-700 font-medium border-b border-stone-100"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex justify-center px-5 py-3 rounded-full bg-stone-900 text-stone-50 font-medium"
            >
              Agenda una consulta
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}
