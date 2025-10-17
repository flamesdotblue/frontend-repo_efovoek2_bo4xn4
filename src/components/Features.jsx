import { Rocket, Shield, Zap, Star } from 'lucide-react';

const items = [
  {
    icon: Rocket,
    title: 'Despegue inmediato',
    desc: 'Publica en minutos con una estructura optimizada para SEO y alto rendimiento.'
  },
  {
    icon: Shield,
    title: 'Seguridad primero',
    desc: 'Buenas prácticas, protección de datos y cumplimiento de normativas vigentes.'
  },
  {
    icon: Zap,
    title: 'Rápida y ligera',
    desc: 'Carga instantánea gracias a una arquitectura moderna y eficiente.'
  },
  {
    icon: Star,
    title: 'Diseño que conquista',
    desc: 'Interfaz cuidada al detalle para aumentar la confianza y la conversión.'
  }
];

export default function Features() {
  return (
    <section id="caracteristicas" className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Hecha para crecer contigo</h2>
          <p className="mt-3 text-slate-600">
            Todo lo que necesitas para presentar tu producto o servicio de forma clara, elegante y efectiva.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>

        <div id="testimonios" className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <blockquote key={i} className="rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 shadow-sm">
              <p className="text-slate-700 italic">“Hemos duplicado las conversiones desde que lanzamos la nueva página. Rápida, bonita y efectiva.”</p>
              <footer className="mt-4 flex items-center gap-3">
                <img src={`https://i.pravatar.cc/100?img=${i}`} alt="Cliente satisfecho" className="h-10 w-10 rounded-full" />
                <div>
                  <div className="font-medium text-slate-900">Cliente {i}</div>
                  <div className="text-sm text-slate-500">Empresa {i}</div>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
