export default function Rodape() {
  return (
    <footer className="px-6 sm:px-10 lg:px-20 py-12 bg-carvao border-t border-marfim/10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        <span className="font-display text-xl text-dourado">Celebra</span>

        <nav className="flex gap-8 font-mono text-xs uppercase tracking-wider text-marfim/50">
          <a href="#solucao" className="hover:text-dourado transition-colors">Produto</a>
          <a href="#precos" className="hover:text-dourado transition-colors">Preços</a>
          <a href="#contacto" className="hover:text-dourado transition-colors">Contacto</a>
        </nav>

        <span className="text-xs text-marfim/30">
          © {new Date().getFullYear()} Celebra. Todos os direitos reservados.
        </span>
      </div>
    </footer>
  );
}
