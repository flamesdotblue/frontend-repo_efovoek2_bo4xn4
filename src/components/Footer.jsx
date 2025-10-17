export default function Footer() {
  return (
    <footer id="contacto" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-tr from-indigo-600 to-fuchsia-500 text-white font-bold">S</span>
              <span className="text-slate-900 font-semibold tracking-tight">SúperMarca</span>
            </div>
            <p className="mt-3 text-sm text-slate-600 max-w-sm">
              Construimos experiencias digitales que inspiran confianza y convierten visitantes en clientes.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900">Enlaces</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#inicio" className="hover:text-slate-900">Inicio</a></li>
              <li><a href="#caracteristicas" className="hover:text-slate-900">Características</a></li>
              <li><a href="#testimonios" className="hover:text-slate-900">Testimonios</a></li>
              <li><a href="#contacto" className="hover:text-slate-900">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900">Contáctanos</h4>
            <form onSubmit={(e) => e.preventDefault()} className="mt-3 grid grid-cols-1 gap-3">
              <input type="email" required placeholder="Tu email" className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600/30" />
              <textarea rows="3" placeholder="Cuéntanos tu proyecto" className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600/30"></textarea>
              <button type="submit" className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-white text-sm font-medium hover:bg-indigo-500">Enviar</button>
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} SúperMarca. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-700">Privacidad</a>
            <a href="#" className="hover:text-slate-700">Términos</a>
            <a href="#" className="hover:text-slate-700">Soporte</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
