export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50 via-white to-white"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-3 py-1 text-xs text-indigo-700">
              <span className="h-2 w-2 rounded-full bg-indigo-600"></span>
              Nuevo en 2025: más rápido y seguro
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
              Impulsa tu presencia digital con una landing page moderna
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Diseñada para convertir. Rendimiento excelente, accesible en cualquier dispositivo y lista para crecer con tu negocio.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-white font-medium shadow hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600/30"
              >
                Empezar gratis
              </a>
              <a
                href="#caracteristicas"
                className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-6 py-3 text-slate-800 font-medium hover:bg-slate-50"
              >
                Ver características
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2"><span className="font-semibold text-slate-900">99.9%</span> Uptime</div>
              <div className="flex items-center gap-2"><span className="font-semibold text-slate-900">GDPR</span> Cumplimiento</div>
              <div className="flex items-center gap-2"><span className="font-semibold text-slate-900">24/7</span> Soporte</div>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop"
                alt="Ejemplo de interfaz moderna"
                className="h-[420px] w-full object-cover rounded-xl"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
