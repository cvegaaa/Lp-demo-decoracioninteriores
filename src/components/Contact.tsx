import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    project_type: 'Residencial',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    const { error } = await supabase.from('contact_submissions').insert({
      name: form.name,
      email: form.email,
      phone: form.phone || null,
      project_type: form.project_type,
      message: form.message,
    });
    if (error) {
      setStatus('error');
      return;
    }
    setStatus('success');
    setForm({ name: '', email: '', phone: '', project_type: 'Residencial', message: '' });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-stone-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16">
        <div>
          <p className="text-amber-400 tracking-[0.25em] uppercase text-xs font-semibold mb-4">
            Contacto
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-50 leading-tight mb-8">
            Cuéntanos sobre tu espacio
          </h2>
          <p className="text-stone-300 leading-relaxed font-light mb-10 max-w-md">
            Respondemos en menos de 48 horas. La primera consulta es siempre
            gratuita y sin compromiso.
          </p>

          <ul className="space-y-5">
            <li className="flex items-center gap-4 text-stone-200">
              <span className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center">
                <Mail size={18} className="text-amber-400" />
              </span>
              hola@atelierstudio.es
            </li>
            <li className="flex items-center gap-4 text-stone-200">
              <span className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center">
                <Phone size={18} className="text-amber-400" />
              </span>
              +34 600 123 456
            </li>
            <li className="flex items-center gap-4 text-stone-200">
              <span className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center">
                <MapPin size={18} className="text-amber-400" />
              </span>
              Carrer de Consell de Cent 120, Barcelona
            </li>
          </ul>
        </div>

        <div className="bg-stone-50 rounded-3xl p-8 md:p-10">
          {status === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <CheckCircle2 size={56} className="text-amber-700 mb-6" />
              <h3 className="font-serif text-2xl text-stone-900 mb-3">¡Mensaje enviado!</h3>
              <p className="text-stone-600 font-light max-w-sm">
                Gracias por contactarnos. Te responderemos en menos de 48 horas.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-8 text-amber-700 font-medium hover:underline"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field
                  label="Nombre"
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                  required
                />
                <Field
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                  required
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field
                  label="Teléfono (opcional)"
                  value={form.phone}
                  onChange={(v) => setForm({ ...form, phone: v })}
                />
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Tipo de proyecto
                  </label>
                  <select
                    value={form.project_type}
                    onChange={(e) => setForm({ ...form, project_type: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 focus:outline-none focus:ring-2 focus:ring-amber-700/40 focus:border-amber-700 transition"
                  >
                    <option>Residencial</option>
                    <option>Comercial</option>
                    <option>Mobiliario a medida</option>
                    <option>Consultoría</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Cuéntanos tu proyecto
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 focus:outline-none focus:ring-2 focus:ring-amber-700/40 focus:border-amber-700 transition resize-none"
                  placeholder="¿Qué necesitas? ¿Cuándo te gustaría empezar?"
                />
              </div>

              {status === 'error' && (
                <p className="text-red-600 text-sm">
                  No se pudo enviar el mensaje. Inténtalo de nuevo en unos minutos.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-stone-900 text-stone-50 rounded-full font-medium hover:bg-stone-800 transition-all duration-300 disabled:opacity-60"
              >
                {status === 'submitting' ? 'Enviando…' : 'Enviar mensaje'}
                <Send size={18} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  type = 'text',
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-stone-700 mb-2">
        {label}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 focus:outline-none focus:ring-2 focus:ring-amber-700/40 focus:border-amber-700 transition"
      />
    </div>
  );
}
