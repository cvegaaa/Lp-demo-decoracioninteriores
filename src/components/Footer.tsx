import { Instagram, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#home" className="font-serif text-2xl text-stone-50">
          Atelier<span className="text-amber-600">.</span>
        </a>
        <p className="text-sm">
          © {new Date().getFullYear()} Atelier Estudio de Diseño. Todos los derechos reservados.
        </p>
        <div className="flex gap-4">
          {[Instagram, Linkedin, Facebook].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-amber-700 hover:text-stone-50 transition-colors"
              aria-label="Red social"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
